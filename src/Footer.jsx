// import React from 'react'

const Footer = () => {
    const today = new Date()
  return (
    <footer>
        <p>
            Copyright &copy; {today.getMonth()}/{today.getDate()}/{today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer