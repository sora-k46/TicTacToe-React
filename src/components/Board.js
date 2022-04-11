import Square from "./Square";
import React, { useState } from "react";

function Board() {
    const [turn, setTurn] = useState('X');
    const [squares, setSquare] = useState(Array(9).fill(''));

    function foundWinner(square) {
        const winScenario = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winScenario.length; ++i) {
            const [a, b, c] = winScenario[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // return squares[a];
                return [a, b, c];
            }
        }
        return null;
    }

    const handleClick = (num) => {
        let result = foundWinner(squares);
        if (result == null) {
            if (squares[num] !== '') {
                alert('already clicked')
            } else {
                let Msquares = [...squares];
                if (turn === 'X') {
                    Msquares[num] = 'X';
                    setTurn('O');
                } else {
                    Msquares[num] = 'O';
                    setTurn('X');
                }
                setSquare(Msquares)
            }
        } else {
            alert('Winner is ' + squares[result[0]])
        }
    }

    return (
        <div className="board">
            <h1>Turn of {turn}</h1>
            <div className="boardRow">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="boardRow">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="boardRow">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

export default Board;