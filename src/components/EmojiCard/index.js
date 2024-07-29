import './index.css'

const EmojiCard = props => {
  const {emojiCards, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCards

  const byClickOnEmojiCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojis-card">
      <button type="button" className="emoji-btn">
        <img
          src={emojiUrl}
          alt={emojiName}
          onClick={byClickOnEmojiCard}
          className="emoji-img"
        />
      </button>
    </li>
  )
}

export default EmojiCard
