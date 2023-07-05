import React from 'react'
import Link from 'next/link'

const HomeMiniCard = ({featureX, name, content, link, button, none}) => {
  return (
    <div className={`home-mini-card ${none}`}>
        <Link href={`${link}`}>
        <a>
            <div  className={`column-feature ${featureX}`} >
                <p  className="header">{name}</p>
                <p className="text">{content}</p>
                <p  className="link-button">{button} 
                    <span className="chevron-icon">›</span>
                </p>
            </div>
        </a>
            
        </Link>

    </div>
  )
}

export default HomeMiniCard