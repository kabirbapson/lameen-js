import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    countHim() {
        this.setState({
            count: this.state.count + 2
        })
    }
    render() {

        return (
            <div>
                <h2>Count X {this.state.count}
                    <button onClick={() => this.countHim()}>Count Him</button>
                </h2>
            </div>
        )
    }
}