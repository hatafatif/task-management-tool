import React from 'react'
import "./NoteSection.css"
import Header from "./Header"
import Notes from "./Notes"
import AddNote from "./AddNote"


const NoteSection = () => {
  return (
    <div className='NoteSection'>
      <Header />
      <Notes />
      <AddNote />
    </div>
  )
}   

export default NoteSection