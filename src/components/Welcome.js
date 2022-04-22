import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1> ---- Welcome {this.props.name} and He's {this.props.hname} ===</h1>
        // { this.props.name }
    }
}
export default Welcome;