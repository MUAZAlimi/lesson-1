// import React from 'react'

const Header = () => {
  const headerStyle = {
    backgroundColor: "aqua",
    color: "black",
    borderRadius: "10px",
    padding: "2px"
  }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO REACT IN DETAILS</h1>
      <h2 style={{color: "aqua", fontSize: "30px", borderTopRightRadius: "5px", backgroundColor: "#081b29"}}>WELCOME TO DLT-AFRICA BOOT CAMP</h2>
    </header>
  )
}

export default Header
