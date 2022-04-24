
import React from 'react'


// export default function Destruct(props) {
//     return (
//         <div>Build House {props.age}: Bappi</div>
//     )
// }

const Destruct = props => {
    const { name, age } = props
    return (
        <div>
            Bappi is {age}
        </div>
    )
}
// export default Destruct
// const Destruct = ({ name, age }) => {
//     return (
//         <div>
//             <h3>Counter = {this.state.count} &nbsp;
//                 <button onClick={() => this.counterPlus()}> Counter++</button></h3>
//             <h1> Hello {age} </h1>
//         </div>
//     )
// }

export default (Destruct)