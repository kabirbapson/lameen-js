import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
        var abc = this.inputRef.current.value
        console.log(abc)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='submit' onClick={this.clickHandler} />
            </div>
        )
    }
}

export default RefDemo