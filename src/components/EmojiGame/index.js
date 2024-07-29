import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      emojisList: props.emojisList,
      clickedEmojisList: [],
      result: null,
    }
  }

  onClickEmoji = id => {
    const {clickedEmojisList, topScore, emojisList} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    if (clickedEmojisList.includes(id)) {
      this.setState({
        result: false,
      })
    } else {
      const newClickedEmojisList = [...clickedEmojisList, id]
      const newScore = newClickedEmojisList.length
      const newTopScore = Math.max(newScore, topScore)

      if (newScore === emojisList.length) {
        this.setState({
          result: true,
        })
      }

      this.setState({
        emojisList: shuffledEmojisList,
        score: newScore,
        topScore: newTopScore,
        clickedEmojisList: newClickedEmojisList,
      })
    }
  }

  onPlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      result: null,
    })
  }

  render() {
    const {score, topScore, emojisList, result} = this.state

    return (
      <div className="game-container">
        <NavBar score={score} topScore={topScore} result={result} />
        {result !== null && (
          <WinOrLoseCard
            result={result}
            score={score}
            onPlayAgain={this.onPlayAgain}
          />
        )}
        {result === null && (
          <ul className="emojis-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiCards={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
