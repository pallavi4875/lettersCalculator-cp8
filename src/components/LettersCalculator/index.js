// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValue: '', // To store the input value
    letterCount: 0, // To store the count of letters
  }

  handleInputChange = e => {
    const value = e.target.value
    this.setState({inputValue: value})
  }

  calculateLetterCount = () => {
    const {inputValue} = this.state
    const count = inputValue.replace(/[^a-zA-Z]/g, '').length // Count only letters
    this.setState({letterCount: count})
  }

  render() {
    const {inputValue, letterCount} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letter calculator"
          className="image"
        />
        <h1 className="heading">Calculate the Letter you enter</h1>

        <label className="title">Enter your name </label>
        <input
          type="text"
          placeholder="Enter the Number"
          className="placeholder"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <div>
          <button className="button" onClick={this.calculateLetterCount}>
            No of letters: {letterCount}
          </button>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
