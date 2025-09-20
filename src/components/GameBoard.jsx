const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ gameTurns, handleSelectSquare }) {
  /*
    [
        { square: { i, j }, player: "X" },
        { square: { i, j }, player: "O" },
        { square: { i, j }, player: "O" }
    ]
    */

  const gameState = initialGameBoard.map(row => [...row])
  gameTurns.forEach(({ square, player }) => {
    gameState[square.i][square.j] = player
  })

  console.log(gameState)

  return (
    <ol id="game-board">
      {gameState.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((symbol, j) => (
              <li key={j}>
                <button
                  onClick={() => {
                    if (symbol) return
                    handleSelectSquare(i, j)
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
