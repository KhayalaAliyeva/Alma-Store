import React from 'react'

const PageHeader = ({header}) => {
  return (
    <section id="page-header">
    <div className="container">
        <h1>{header}</h1>
    </div>
    </section>
  )
}

export default PageHeader