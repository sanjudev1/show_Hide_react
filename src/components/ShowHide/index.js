// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstNameStatus = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastNameStatus = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="flex_box">
          <div className="innerCard">
            <button
              type="button"
              className="button"
              onClick={this.onFirstNameStatus}
            >
              Show/Hide Firstname
            </button>
            <div>{firstName && <p className="card">Joe</p>}</div>
          </div>
          <div className="innerCard">
            <button
              type="button"
              className="button"
              onClick={this.onLastNameStatus}
            >
              Show/Hide Lastname
            </button>
            <div>{lastName && <p className="card">Jonas</p>}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
