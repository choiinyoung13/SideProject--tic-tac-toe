import { WINNING_COMBINATIONS } from '../wining-combinations.js'

export function checkWinner(gameTurns) {
  // gameTurns를 2차원 배열로 변환
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  // gameTurns 배열을 순회하면서 게임보드 채우기
  for (const turn of gameTurns) {
    const { square, player } = turn
    gameBoard[square.i][square.j] = player
  }

  // 각 승리 조합을 확인
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = combination[0]
    const firstPlayer = gameBoard[firstSquare.row][firstSquare.column]

    // 첫 번째 칸이 비어있으면 이 조합은 승리가 아님
    if (!firstPlayer) continue

    // 모든 칸이 같은 플레이어인지 확인
    const isWinningCombination = combination.every(
      square => gameBoard[square.row][square.column] === firstPlayer
    )

    if (isWinningCombination) {
      return firstPlayer // 'X' 또는 'O' 반환
    }
  }

  // 승리자가 없고 보드가 가득 찬 경우 무승부
  const isDraw = gameTurns.length === 9
  if (isDraw) {
    return 'draw'
  }

  // 승리자도 없고 무승부도 아니면 게임 진행 중
  return null
}

export function deriveActivePlayer(gameTurns) {
  let currentPlayer =
    gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X'

  return currentPlayer
}
