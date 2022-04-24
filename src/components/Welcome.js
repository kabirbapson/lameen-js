import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, hname } = this.props; // a cool state and props assignment
        return <h1> ---- Welcome {name} and He's {this.props.hname} ===</h1>
        // { this.props.name }
    }
}
export default Welcome;