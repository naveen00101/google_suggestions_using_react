// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    suggestionList: this.props,
    searchText: '',
  }

  OnClick = text => {
    this.setState({searchText: text})
  }

  OnChange = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {suggestionList, searchText} = this.state
    const list = suggestionList.suggestionsList
    const filteredList = list.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-box">
            <img
              className="searchImg"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-search"
              onChange={this.OnChange}
              value={searchText}
            />
          </div>
          <ul className="list-container">
            {filteredList.map(eachItem => (
              <SuggestionItem
                suggestionText={eachItem.suggestion}
                ONclick={this.OnClick}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
