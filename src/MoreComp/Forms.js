import React, { Component } from 'react'


export default class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: ''
        }
    }
    // handleUserNameChange(){
    //     this.setState  = {
    //         username: 
    //     }
    // }
    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleUserComments = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} `)
        event.preventDefault()
    }



    render() {
        const { username, comments } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>

                    <label>Userne: </label>
                    <input type='text'
                        value={username}
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments}
                        onChange={this.handleUserComments}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

