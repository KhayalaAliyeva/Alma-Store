import React,{useContext, useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import AddToCartIcon from "../public/images/companenets/cart-icon.svg"
import GoToCart from "../public/images/companenets/catalog/catalog-cart-link-icon.svg"
import {Compare} from "../public/svg/index"
import {WishList} from "../public/svg/index"


const CatalogListItem = ({id, name, price, prevPrice, vat, img, code, productInfo,onclick, newIcon, promoIcon, exclusiveIcon, hideAddToCart, showGoToCart}) => {
   
   
  return (
    <div className="catalog-list-item">
      <div className="sale-icons">
        <div  className={`icon icon-green ${newIcon}`}> New </div>
        <div  className={`icon icon-red ${promoIcon}`}> Promo </div>
        <div  className={`icon icon-dark ${exclusiveIcon}`}> Exclusive </div>
      </div>
      <div className="item-section-buttons">
        <div className="pr-btn-wrapper">
            <button  type="button" className="btn btn-compare">
                <Compare className="item-button-svg-compare"/>
            </button>
        </div>
        <div className="pr-btn-wrapper">
            <button  type="button" className="btn btn-favorite">
                <WishList className="item-button-svg-wishlist"/>
            </button>
        </div>
      </div>
      <div className="item-image">
        <Link href={`/mac/macbook-pro/${id}`}>
            <a>
                <picture>
                    <source srcSet={img} type="image/webp" />
                    <img src={img} alt="model" />
                </picture>
            </a>
        </Link>
      </div>
      <div className="item-description">
        <div className="item-info">
            <Link href={`/${id}`}>
                <a className="item-name">
                    {name}
                </a>
            </Link>
            <p  className="item-code"> Product code: {code} </p>
        </div>
        <div className="item-bottom-info">
            <div className="item-prices">
                <div className="prices-wrapper">
                    <p className="price"> {price} AZN </p>
                    <div  className="price-nds" > Including VAT in the amount {vat} AZN </div>

                </div>
            </div>
            <div className="item-features">
                <p className="feature-text"> from 3 to 12 Month 
                    <span className="feature-text-price"> from {Math.round(price/12)} AZN /mon. </span>
                </p>
            </div>
            <div className="item-buttons-wrapper">
                <div className="product-order-buttons rounded">
                 <button className={`btn btn-base  ${hideAddToCart}`} onClick={onclick}>
                    <figure>
                        <Image src={AddToCartIcon} alt="addToCart"/>
                    </figure>
                 </button>
                 <button className={`btn btn-base btn-green ${showGoToCart}`}>
                    <figure>
                        <Image src={GoToCart} alt="addToCart"/>
                    </figure>
                 </button>

                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default CatalogListItem