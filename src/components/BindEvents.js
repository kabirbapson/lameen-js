import React, { Component } from 'react'

export class BindEvents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sms: 'Hello!!!'
        }
        // this.bindHandler = this.bindHandler.bind(this)
    }
    // bindHandler() {
    //     this.setState({
    //         sms: 'Bye'
    //     })
    //     console.log(this);
    // }
    bindHandler = () => {
        this.setState({
            sms: 'Bye Byes'
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.sms}
                </div>
                {/* <button onClick={this.bindHandler.bind(this)}><b>Bind Events</b></button> */}
                {/* <button onClick={() => this.bindHandler()}><b>Bind Events</b></button> */}
                <button onClick={this.bindHandler}><b>Bind Events</b></button>

            </div>
        )
    }
}

export default BindEvents