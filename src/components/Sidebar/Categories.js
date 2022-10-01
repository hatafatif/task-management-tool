import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
    <div className='Categories'>
    <h2>Categories</h2>
      <Category name="Work"/>
      <Category name="Hobby"/>
      <Category name="Health"/>
    </div>
  )
}

export default Categories