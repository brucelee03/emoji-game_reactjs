import './index.css'

const WinOrLoseCard = props => {
  const {result, score, onPlayAgain} = props

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  const resultText = result ? 'You Won' : 'You Lose'
  const scoreText = result ? 'Best Score' : 'Score'
  const gameResultImg = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-card">
      <div className="result-container">
        <h1 className="result">{resultText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={gameResultImg} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
