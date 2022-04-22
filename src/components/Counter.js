import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    // increment() {
    //     this.setState({
    //         count: this.state.count + 3
    //     },
    //         () => console.log(`Call Back Value:  + ` + this.state.count))
    //     console.log(this.state.count)
    // }
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }
            // console.log(this.state.count)
        ))
    }

    render() {
        return (
            <div>
                <div>Counter - {this.state.count}</div>
                <button onClick={() => this.increment()}>Counter Add</button>

            </div>
        )
    }
}

export default Counter