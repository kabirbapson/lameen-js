import React from 'react'

function FunctionClick() {
    function clickFunction() {
        console.log('Button Clicked!!!')
    }

    return (
        <div>
            FunctionClick
            <button onClick={clickFunction}>
                Function - Click</button>
        </div>
    )
}

export default FunctionClick