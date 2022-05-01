import React, { Component } from 'react'
import { UserC, UserConsumer } from './UserContext'

export class CompA extends Component {
    render() {
        return (
            <UserC>
                {username => {
                    return <div>Hello {username}</div>
                }}
            </UserC>
        )
    }
}

export default CompA