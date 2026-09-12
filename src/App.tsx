//import { useState } from 'react'
import './App.css'
import {GameHeader} from "./components/GameHeader"
import {Card} from "./components/Card"
import {WinMessage} from "./components/WinMessage"
import { useGameLogic } from './hooks/useGameLogic';

const cardValues: string[] = [
  "🍌",
  "🍋‍🟩",
  "🍉",
  "🍊",
  "🍓",
  "🥥",
  "🥝",
  "🍒",
  "🍌",
  "🍋‍🟩",
  "🍉",
  "🍊",
  "🍓",
  "🥥",
  "🥝",
  "🍒"
]

function App() {
  const {cards, score, moves, isGameComplete, initializeGame, handleCardClick} = useGameLogic(cardValues);

  return (
    <div className='bg-gray-950 h-full pt-7 min-h-screen'>
    <GameHeader score={score} moves={moves} onReset={initializeGame}/>
    {isGameComplete && <WinMessage moves={moves}/>}

    <div className="grid grid-cols-4 gap-4 w-full max-w-md mx-auto p-2 bg-gray-950">
      {cards.map((card) => (
        <Card
          key={card.key}
          card={card}
          onClick={handleCardClick}
        />
      ))}
    </div>
    </div>
  )
}

export default App
