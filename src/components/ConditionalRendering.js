import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() { //Conditionsl rendering
        const { isLoggedIn } = this.state
        ///// 4th approach; short circuit (if true:display)
        return isLoggedIn && <div>Welcome KB!</div>
        //// condtion
        // return isLoggedIn ? (
        //     <div>U r Welcome</div>
        // ) : (
        //     <div>No Wayc!!!</div>
        // )
        ///// 3rd extendd ternary
        // return (
        //     isLoggedIn ?
        //         <div>U r Logged In</div> :
        //         <div>U r aint Logged</div>
        // )
        ////// 3rd approach Ternary
        // return (
        //     isLoggedIn ? 'Bapsons' : "YB"
        // )
        ///   2nd Approach in div
        // let wMessage
        // if (isLoggedIn) {
        //     wMessage = <div>Welcome Bappi'</div>
        // } else {
        //     wMessage = <div>Welcome Baqo</div>
        // }
        // return wMessage
        ///////////////// 2nd Approach Element
        // if (isLoggedIn) {
        //     wMessage = 'Welcome Bappi'
        // } else {
        //     wMessage = 'Welcome Baqo'
        // }
        // return wMessage
        /////////////////  1st Approach ifElse
        // if (isLoggedIn) {
        //     return <div>Welcome Bapson</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting