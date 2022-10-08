import React from 'react'

const Header = ({ text }) => {
  console.log(`Header just got rerendered with text of ${text}`)
  return (
    <div className='Header'>
      <h2>{text}</h2>
    </div>
  )
}

export default Header