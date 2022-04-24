

function PersonsList() {
    const persons = [
        {
            id: 1,
            name: 'Ade',
            age: 90,
            skill: 'Typing'
        },
        {
            id: 2,
            name: 'Salih',
            age: 40,
            skill: 'Proramming'
        },
        {
            id: 3,
            name: 'Luna',
            age: 70,
            skill: 'Business'
        }
    ]
    const personsList = persons.map(
        person => <h2>
            I am {person.name},
            i am {person.age},
            and my skills is {person.skill}
        </h2>)
    // const personlist = persons.map(person => <Persons person={person} />)
    return (
        <div>
            {personsList}
            {/* {personsList.map((item) => (
                <Persons key={item.id} data={item} />
            ))} */}
        </div>
    )
}

export default PersonsList