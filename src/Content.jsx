// import React from 'react'

const Content = () => {
     const handleNameChange = () => {
     const name = ["Ali", "Dave", "Brisa"]
     const int =Math.floor(Math.random() * 3)
     return name[int]
    }
    return (
        <main>
        Hello Mr {handleNameChange()}
        </main>
    )
}

export default Content