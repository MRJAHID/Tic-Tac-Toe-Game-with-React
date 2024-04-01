import Square from "../Square/Square.jsx";
import {useState} from "react";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    function onSquareClick(i) {
        if (squares[i] || calculationWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = 'X';
        } else {
            newSquares[i] = 'O';
        }
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    // Winner Calculation Function
    function calculationWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculationWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next Player ` + (xIsNext ? "X" : "O");
    }



    return (
        <>
            <div>
                <div>{status}</div>

                <div className='flex'>
                    <Square onSquareClick={() => onSquareClick(0)} value={squares[0]}/>
                    <Square onSquareClick={() => onSquareClick(1)} value={squares[1]}/>
                    <Square onSquareClick={() => onSquareClick(2)} value={squares[2]}/>
                </div>
                <div className='flex'>
                    <Square onSquareClick={() => onSquareClick(3)} value={squares[3]}/>
                    <Square onSquareClick={() => onSquareClick(4)} value={squares[4]}/>
                    <Square onSquareClick={() => onSquareClick(5)} value={squares[5]}/>
                </div>
                <div className='flex'>
                    <Square onSquareClick={() => onSquareClick(6)} value={squares[6]}/>
                    <Square onSquareClick={() => onSquareClick(7)} value={squares[7]}/>
                    <Square onSquareClick={() => onSquareClick(8)} value={squares[8]}/>
                </div>
            </div>
        </>
    );
};

export default Board;
