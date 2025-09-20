import { useState } from 'react'
import { checkWinner, deriveActivePlayer } from './utils/gameLogic'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log'
import GameOver from './components/GameOver'

const PLAYERS = {
  X: 'player 1',
  O: 'player 2',
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  const result = checkWinner(gameTurns)

  const handleSelectSquare = (i, j) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [
        { square: { i, j }, player: currentPlayer },
        ...prevTurns,
      ]
      return updatedTurns
    })
  }

  const handleRestart = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName,
    }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            handlePlayerNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            handlePlayerNameChange={handlePlayerNameChange}
          />
        </ol>
        {result && (
          <GameOver
            result={result}
            onRestart={handleRestart}
            players={players}
          />
        )}

        <GameBoard
          gameTurns={gameTurns}
          handleSelectSquare={handleSelectSquare}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
