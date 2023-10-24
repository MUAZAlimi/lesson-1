// import React from 'react'

const Content = () => {
     const handleNameChange = () => {
     const names = ["Muaz", "Dave", "Brisa"]
     const int =Math.floor(Math.random() * 3)
     return names[int]
    }
    const handleClick = () => {
        console.log("you click it");
    }
    const handleClickOne = (names) => {
        console.log(`${names} was click`)
    } 
    const handleClickTwo = (e) => {
        console.log(e.target.innerText)
    }
    return (
        <main>
            <p> 
                Hello Mr {handleNameChange()} 💯🤑🎊😎
            </p>
            <button onClick={handleClick}>CLICK TO START</button><hr />
            <button onClick={() => handleClickOne("Muaz")} >CLICK NAME</button><hr />
            <button onClick={(e) => handleClickTwo(e)}>CLICK NOW</button>
        </main>
    )
}

export default Content