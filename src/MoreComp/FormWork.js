import React, { Component } from 'react'

export default class FormWork extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    onUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    // onClickEvent = (event) => {
    //     event.preventDefault()
    // }
    onSubmitEvent = (event) => {
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    render() {
        const { username } = this.state
        return (
            <form onSubmit={this.onSubmitEvent}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username}
                        onChange={this.onUsernameChange} />
                    {/* <input type='text'>Submission</input> */}
                </div>
                <button >Submit</button>
                {/* <input type='submit'>Submit</input> */}

            </form>
        )
    }
}
