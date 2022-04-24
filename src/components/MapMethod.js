import React, { Component } from 'react'

export default class mapMethod extends Component {
    render() {
        var array = [1, 3, 5, 7]
        const map1 = array.map(x => x * 2)
        var names = ['Slow', 'Swagger', 'Hassan']
        const nameList = names.map(name => <h3>{name}</h3>)
        return (
            // <div>{nameList}</div>
            // <div>
            //     {/* {array} */}
            //     {/* <h3>{map1[0]}</h3>
            //     <h3>{map1[1]}</h3>
            //     <h3>{map1[2]}</h3>
            //     <h3>{map1[3]}</h3> */}
            //  </div>
            <div>
                {
                    names.map(name => <h3>{name}</h3>)
                }
            </div>
        )
    }
}
