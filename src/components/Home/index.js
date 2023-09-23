import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {loggedIn: false, message: 'Please Login', buttonContent: 'Login'}

  changing = () => {
    const {loggedIn} = this.state
    if (loggedIn) {
      this.setState(() => ({
        loggedIn: !loggedIn,
        message: 'Please Login',
        buttonContent: 'Login',
      }))
    } else {
      this.setState(() => ({
        loggedIn: !loggedIn,
        message: 'Welcome User',
        buttonContent: 'Logout',
      }))
    }
  }

  render() {
    const {message, buttonContent} = this.state
    return (
      <div className="mainContainer">
        <h1>{message}</h1>
        <button type="button" onClick={this.changing}>
          {buttonContent}
        </button>
      </div>
    )
  }
}

export default Home
