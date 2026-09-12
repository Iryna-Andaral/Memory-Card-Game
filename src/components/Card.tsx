
export type CardType = {
  card: {
    key: number,
    value: string,
    isMatched: boolean,
    isFlipped: boolean
  },
  onClick: (card: CardType["card"]) => void
};

export const Card = ({ card, onClick }:CardType): React.ReactElement => {
  return (
    <div onClick={() => onClick(card) }
    className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""} pointer-events-auto cursor-pointer relative w-full aspect-square font-bold text-2xl text-violet-50`}>
      <div className="card-back pointer-events-auto absolute inset-0 flex items-center justify-center rounded-md bg-gray-900 border-2 border-gray-700">
        {card.value}
      </div>

      <div className="card-front pointer-events-auto absolute inset-0 flex items-center justify-center rounded-md border-2 border-gray-700 bg-gray-900 font-bold">
        ?
      </div>
    </div>
  );
};