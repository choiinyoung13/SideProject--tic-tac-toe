export default function GameOver({ result, onRestart, players }) {
  const handleRestart = () => {
    onRestart()
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{result === 'draw' ? "It's a draw!" : `${players[result]} wins.`}</p>
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  )
}
