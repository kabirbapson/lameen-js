import React from 'react'
import PersonsList from './PersonsList'


export default function Persons({ person }) {

    return (
        <div>
            {/* <PersonsList /> */}
            <h2>I am {person.name}, i am {person.age} and i know {person.skill}</h2>
        </div>
    )


}



