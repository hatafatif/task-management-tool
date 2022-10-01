import React from 'react'
import Note from "./Note"

const note = {title: "This is a note", text: "dude bro man this is something we really need to do", id: 1}

const Notes = () => {
  return (
    <div className='Notes'>
      <Note note={note}/>
      <Note note={note}/>
      <Note note={note}/>
      <Note note={note}/>
    </div>
  )
}

export default Notes