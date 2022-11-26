import React from 'react'

const CategoryList = ({children}) => {
  return (
    <div className="container">
      <div className="category-list">{children}</div>
    </div>
  )
}

export default CategoryList