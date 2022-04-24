import React, { Component } from 'react'

class ClassClick extends Component {
    clickClass() {
        console.log('Its clicked!!!')
    }
    render() {
        return (
            <div>ClassClick
                <button onClick={this.clickClass} >
                    Class - Click</button>
            </div>
        )
    }
}

export default ClassClick