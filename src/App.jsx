import Board from "./components/Board/Board.jsx";
import History from "./components/History/History.jsx";
import {useState} from "react";
import square from "./components/Square/Square.jsx";

function App() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpToMove(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((square, move) => {
        let description;

        if (move > 0) {
            description = `Go to the move # ${move}`;
        } else {
            description = `-- Make Your First Move --`;
        }

        return (
            <li key={move} className='mb-1 text-green-800 hover:text-black'>
                <button onClick={() => jumpToMove(move)}>{description}</button>
            </li>
        )
    })

    return (
        <>
            <main className='flex'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                <History moves={moves}/>
            </main>
        </>
    )
}

export default App
