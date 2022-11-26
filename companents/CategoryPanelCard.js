import React from 'react'
import Link from 'next/link'

const CategoryPanelCard = ({size, link, featureX, name, content}) => {
  return (
    <div className={`category-panel-card ${size}`}>
        <Link href={`${link}`}>
            <a>
                <div  className={`column-feature ${featureX}`} >
                    <div className="panel-content">
                        <p  className="header">{name}</p>
                        <p className="text">{content}</p>
                        <p  className="link-button"> View models  
                            <span className="chevron-icon">›</span>
                        </p>
                    </div>
                </div>
            </a>
            
        </Link>

    </div>
  )
}

export default CategoryPanelCard