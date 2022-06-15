import React from 'react'
import Button from './Button'

const Header = ({click, showAdd}) => {

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={click} />
    </header>
  )
}

export default Header