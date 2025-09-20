export default function Log({ gameTurns }) {
  /*
    [
        { square: { i, j }, player: "X" },
        { square: { i, j }, player: "O" },
        { square: { i, j }, player: "O" }
    ]
    */
  return (
    <ol id="log">
      {gameTurns.map(({ square, player }) => (
        <li key={`${square.i}-${square.j}`}>
          {player} selected {square.i},{square.j}
        </li>
      ))}
    </ol>
  )
}
