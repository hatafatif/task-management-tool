import React from 'react'

const AddCat = ({onClick}) => {
  return (
    <div className='AddCat'>
      <button onClick={onClick}>Add a New Category +</button>
    </div>
  )
}

export default AddCat