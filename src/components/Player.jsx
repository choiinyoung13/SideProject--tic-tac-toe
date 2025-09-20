import { useState } from 'react'

export default function Player({
  initialName,
  symbol,
  isActive,
  handlePlayerNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditMode, setIsEditMode] = useState(false)

  const onClickHandler = () => {
    setIsEditMode(editing => !editing)
    if (isEditMode) {
      handlePlayerNameChange(symbol, playerName)
    }
  }
  const onChangeHandler = e => {
    setPlayerName(e.target.value)
  }

  let player = isEditMode ? (
    <input onChange={onChangeHandler} type="text" value={playerName} />
  ) : (
    <span className="player-name">{playerName}</span>
  )

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditMode ? 'Save' : 'Edit'}</button>
    </li>
  )
}
