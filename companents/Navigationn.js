import React, { Children } from 'react'
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'


const Navigation = ({children}) => {
  return (
    <div className="navigation">
      <div className="container">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link href="/">
                <a>
                    <FontAwesomeIcon icon={faHouseChimney}/>
                </a>

            </Link>

            </li>
            {children}

        </ol>
      </div>

    </div>
    
  )
}

export default Navigation