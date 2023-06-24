// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionText, ONclick} = props
  const SearchSuggestion = () => {
    ONclick(suggestionText)
  }
  return (
    <li>
      <p className="suggestionText">{suggestionText}</p>
      <img
        className="arrowImg"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="diagonal-arrow"
        onClick={SearchSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
