import React from 'react'
import './MyStyles.css'

function MyStyleTest(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h3 className={`${className} font-xl`}>
                MyStyleTest
            </h3>

        </div>
    )
}

export default MyStyleTest