

import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: 0
        }
    }
    hoverCount = () => {
        this.setState(prevState => {
            return { hover: prevState.hover + 1 }
        })
    }

    render() {
        const { hover } = this.state
        return (
            <div>
                <h2 onMouseOver={this.hoverCount}>Hovered {hover} Times</h2>
            </div>
        )
    }
}

export default HoverCounter