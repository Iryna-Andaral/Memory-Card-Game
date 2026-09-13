import { useState, useEffect } from "react";
import type { CardType } from "../components/Card";


export const useGameLogic = (cardValues:string[]) => {
    const [cards, setCards] = useState<CardType["card"][]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMetchedCards] = useState<number[]>([]);
    const [score, setScore] = useState<number>(0);
    const [moves, setMoves] = useState<number>(0);
    const [isLocked, setIsLocked] =useState<boolean>(false);
    
    
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i=shuffled.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled
    }
    
    const initializeGame = () => {
      const shuffled = shuffleArray(cardValues);
    
        const finalCards = shuffled.map((value, index) => ({
          key: index,
          value,
          isFlipped: false,
          isMatched: false,
        }));
        setIsLocked(false);
        setMetchedCards([]);
        setCards(finalCards);
        setMoves(0);
        setScore(0)
      };
    
      useEffect(() => {
        initializeGame();
      }, [])
    
      const handleCardClick = (card:CardType["card"]) => {
        if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2){
          return
        }
        const newCards = cards.map((c) => {
          if (c.key === card.key) {
            return {...c, isFlipped: true}
          }else{
            return c;
          }
        })
        setCards(newCards);
        const newFlippedCards = [... flippedCards, card.key];
        setFlippedCards(newFlippedCards);
    
        if(flippedCards.length === 1){
          setIsLocked(true);
          const firstCard = cards[flippedCards[0]];
          
          
          if (firstCard.value === card.value){
            setTimeout(()=>{
              setMetchedCards((prev) => [...prev, firstCard.key, card.key])
              setScore((prev) => (prev+1))
    
              setCards((prev)=>
                prev.map((c)=>{
                  if (c.key=== card.key || c.key===firstCard.key){
                      return {...c, isMatched:true}
                  }else{
                      return c
               }}));
              setFlippedCards([]);
              setIsLocked(false);
            },200)
          }else{
            setTimeout(()=> {
              const flippedBackCards = newCards.map((c) => {
              if(newFlippedCards.includes(c.key) || c.key===card.key){ 
                return {...c, isFlipped: false};
              }else{
                return c;
              }
            })
            setCards(flippedBackCards);
            setFlippedCards([]);
            setIsLocked(false);
            }, 500)
          }
          setMoves((prev) => (prev+1))
        }
      }
      const isGameComplete = matchedCards.length === cardValues.length;
      console.log(cards)
    return {cards, score, moves, isGameComplete, initializeGame, handleCardClick}
}