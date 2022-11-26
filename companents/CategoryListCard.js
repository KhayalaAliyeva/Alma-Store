import React from 'react'
import Link from 'next/link'

const CategoryListCard = ({link, img, name, newIcon, promoIcon}) => {
  return (
    <div className="category-list-item">
        <Link href={`${link}`}>
         <>
            <a href={`${link}`}>
              <div className="sale-icons">
                <div className={`icon icon-green ${newIcon}`}> new </div>
                <div className={`icon icon-red ${promoIcon}`}> Promo </div>
              </div>
                <figure className="item-img">
                  <picture>
                    <source srcSet={img} type="image/webp" />
                    <img src={img} alt="model" />
                  </picture>
                </figure>
                <div className="item-descr">
                  <p className="category-name">{name}</p>
                </div>
            </a>
         </>

        </Link>
    </div>
  )
}

export default CategoryListCard