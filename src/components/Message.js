import React, { Component } from 'react'

class Message extends Component {


    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor',
            message2: 'Thank you for joining in'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing!'
        })
    }



    render() {
        return (
            <div>
                <h1> {this.state.message}  </h1>
                <h1> {this.state.message2}  </h1>
                <button onClick={() => this.changeMessage()}>Submit Subscription</button>
            </div>
        )
    }
}
export default Message