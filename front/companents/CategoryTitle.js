import React from 'react'

const CategoryTitle = ({header, text}) => {
  return (
    <section id="category-title">
        <div className="container">
            <div className="cat-intro">
                <div className="title-content">
                    <h1  className="title-header"> {header} </h1>
                    <p className="title-text"> {text} </p>
                </div>

            </div>
        </div>

    </section>
  )
}

export default CategoryTitle