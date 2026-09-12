export type GameHeaderProps = {
  score?: number,
  moves: number,
  onReset?: () => void
};

export const GameHeader = ({score, moves, onReset}: GameHeaderProps): React.ReactElement => (
    <div className="bg-gray-900 p-3 rounded-xl text-2xl text-violet-50 text-center border-2 border-gray-700 max-w-md mx-auto mb-5 font-bold">
        <header >🧠 Memory Card Game</header>
                <div className="flex content-center gap-5 justify-center">
                    <div>
                        <div className="font-normal">Score:</div>
                        <div className="text-lime-400 text-2xl font-bold">{score}</div>
                    </div>
                    <div>
                        <div className="font-normal">Moves:</div>
                        <div className="text-sky-500 text-2xl font-bold">{moves}</div>
                    </div>
                </div>
            <div >
        </div>
        <button onClick={onReset} className="bg-gradient-to-r text-sm font-normal from-blue-950 to-sky-400 py-2 px-6 cursor-pointer mt-3 rounded-sm transition-transform duration-150 hover:scale-97 active:scale-95">New Game</button>
    </div>


)

