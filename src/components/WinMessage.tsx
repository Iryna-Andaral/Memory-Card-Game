import type { GameHeaderProps } from "./GameHeader";

export const WinMessage = ({moves}: GameHeaderProps): React.ReactElement=> {
    return <div className="bg-gray-900 p-3 rounded-xl text-violet-50 text-center border-2 border-gray-700 max-w-md mx-auto mb-5"><h2 className="text-lime-400 font-bold text-2xl">Congratulations!</h2>
    <p>You completed the game in {moves} moves!</p>
    
    </div>

}