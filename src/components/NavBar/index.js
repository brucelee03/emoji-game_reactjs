import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props

  const resultNav = result !== null ? 'result-nav' : ''

  return (
    <nav className="nav-bar">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <div>
          <h1 className="logo-name">Emoji Game</h1>
        </div>
      </div>
      {result === null && (
        <div className={`score-bar ${resultNav}`}>
          <div>
            <p className="nav-score">Score: {score}</p>
          </div>
          <div>
            <p className="nav-score">Top Score: {topScore}</p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
