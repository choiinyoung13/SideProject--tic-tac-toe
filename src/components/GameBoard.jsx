import { useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ turn, handleTurn }) {
  const [gameState, setGameState] = useState(initialGameBoard)

  const onClickButton = (i, j) => {
    if (gameState[i][j]) return

    const newGameState = [...gameState]
    newGameState[i][j] = turn
    setGameState(newGameState)
    handleTurn()
  }

  return (
    <ol id="game-board">
      {gameState.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((symbol, j) => (
              <li key={j}>
                <button
                  onClick={() => {
                    onClickButton(i, j)
                  }}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
