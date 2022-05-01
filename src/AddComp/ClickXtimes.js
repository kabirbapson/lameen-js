import React, { Component } from 'react'

export class ClickXtimes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    clickCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        }
        )
    }

    render() {
        const { count } = this.state
        return (
            <button onClick={this.clickCount} onMouseOver={this.clickCount}>Click {count} Times</button>
        )
    }
}

export default ClickXtimes