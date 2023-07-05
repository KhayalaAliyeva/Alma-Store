import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo_image from "../public/images/footer/almastore-footer-top-logo.svg"
import Banner from "../public/images/header/1400_45-1.webp";
import Phone_photo from "../public/images/companenets/header/mobile-header-buttons/header-phone-icon-mobile.svg"
import Forward from "../public/images/companenets/header/mobile-navbar/back-chevron.svg"
import Dialog from './Dialog';


//cart
import { useSelector,useDispatch } from 'react-redux';
import { addToCart, decreaseCart, getTotal, removeFromCart  } from '../features/cartSlice';
// svg
import {Clock,Phone,SignIn, Logo, Search, Compare ,WishList, Cart} from "../public/svg/index"

const Header = () => {
  const cart=useSelector(state=> state.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getTotal());
},[cart, dispatch]);
 const [show, setShow]=useState("none");
 const [menuButton, setMenuButton]=useState("inline-block");
 const [closeButton,setCloseButton]=useState("none");
 const[subMenu, setSubMenu]=useState("none")
 const showMobileNavbar=()=>{
  if(show=="none"&&menuButton=="inline-block"){
    setShow("block");
    setMenuButton("none");
    setCloseButton("inline-block");
    // console.log(show);
  }
  if(show=="block"&&menuButton=="none"){
    setShow("none");
    setMenuButton("inline-block");
    setCloseButton("none");
    // console.log(show);
  }
 }
 const showSubMenu=()=>{
 }
 //doalog
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
  <header id="header">
    <div className="header-banner">
      <Link href="/">
        <a>
          <Image src={Banner} alt="Header-banner"/>
        </a>
      </Link> 
    </div>
    <div className="container">
      <div className="header-top">
        <ul className="nav-list">
          <li>
            <Link href="/information/about">What is Apple Premium Reseller</Link>
          </li>
          <li>
            <Link href="/information/sale">Payment and delivery</Link>
          </li>
          <li>
            <Link href="/information/about">Store addresses</Link>
          </li>
          <li>
            <Link href="https://asbc.az/en">For Business</Link>
          </li>
          <li>
            <Link href="/information/tax-free">Tax Free</Link>
          </li>
        </ul>
        <div className="header-top-content">
          <div className="icon">
            <Clock/>
          </div>
          <div className="content">
            <p  className="text-default">09:00 - 22:00 (Mo-Su)</p>
          </div>
        </div>
        <div className="header-top-content">
          <div className="icon">
            <Phone/>
          </div>
          <div className="content">
            <Link  href="tel:+994507760050" > 
            <>

              <a className="link-default">
              +994 (50)7760050
              </a> 
            </>
            </Link>

            <Link href="tel:+994123101514"  > 
            <>

             <a className="link-default">
                +994 (12)3101514
              </a> 
            </>
            </Link>
          </div>
        </div>
        <div className="languages">
          <ul>
            <li className="first">
              <Link href="/">EN</Link>
            </li>
            <li>
              <Link href="az/">AZ</Link>
            </li>
            <li>
              <Link href="ru/">RU</Link>
            </li>
          </ul>
        </div>
        <div className="sign-in-top">
          <button type="button" className="btn btn-sign-in">
            <SignIn/>
            <span>Personal Account</span>
          </button>
        </div>
      </div>

    </div>

    <div className="navbar">
      <div className="container">
      <nav>
        <div className="logo" >
          <Link href="/">
          
          <a >
            <Logo  className="logo-svg"/>
          </a>
          </Link>
        </div>
        <button className="btn btn-header-search">
          <Search/>
        </button>
        <ul className="main-navbar">
          <li>
            <Link href="/mac">Mac</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/mac/macbook-pro'>
                  <a>
                    MacBook Pro 13" M2 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/macbook-air'>
                  <a>
                    MacBook Air 13.6" M2 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/imac'>
                  <a>
                    iMac 24"M1 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/mac-studio'>
                  <a>
                    Mac Studio  
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-mac/monitors'>
                  <a>
                    Monitors for Mac 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/macbook-pro'>
                  <a>MacBook Pro 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/macbook-air'>
                  <a>MacBook Air 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mac/mac-mini'>
                  <a>Mac mini
                  </a>
                </Link>
              </li>
              <li>
                <Link href='mac/imac'>
                  <a>iMac</a>
                </Link>
              </li>
              <li>
                <Link href='/mac/mac-pro'>
                  <a>Mac Pro
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-mac'>
                  <a>Accessories</a>
                </Link>
              </li>
              <li>
                <Link href='/mac/services-for-mac'>
                  <a>Services</a>
                </Link>
              </li>

            </ul>
          </li>
          <li>
            <Link href="/ipad">iPad</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/ipad/ipad-pro-129'>
                  <a>
                    iPad Pro 12.9 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/ipad-pro-11'>
                  <a>
                    iPad Pro 11 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/ipad-102'>
                  <a>
                    iPad 10,9  
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/ipad-102?filter=23108%7CiPad%20(9th%20generation)~144334853'>
                  <a>
                    iPad 10,2 
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/ipad-air-5'>
                  <a>
                      iPad Air 5
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/ipad-mini-5'>
                  <a>
                    iPad mini
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-ipad'>
                  <a>
                    Accessories
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/services-for-ipad'>
                  <a>
                    Services
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/iphone">iPhone</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/iphone/iphone-14'>
                  <a>
                    iPhone 14 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-14-plus'>
                  <a>
                    iPhone 14 Plus  
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-14-pro'>
                  <a>
                    iPhone 14 Pro   
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-14-pro-max'>
                  <a>
                    iPhone 14 Pro Max  
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-13-pro'>
                  <a>
                    iPhone 13 Pro
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-13-pro-max'>
                  <a>
                    iPhone 13 Pro Max
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-13'>
                  <a>
                    iPhone 13
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-13-mini'>
                  <a>
                    iPhone 13 mini
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-se'>
                  <a>
                    iPhone SE 
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-11'>
                  <a>
                    iPhone 11
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/iphone-12'>
                  <a>
                    iPhone 12
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone'>
                  <a>
                    Accessories
                  </a>
                </Link>
              </li>
              <li>
                <Link href='iphone/services-for-iphone'>
                  <a>
                    Services
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/apple-watch">Watch</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/apple-watch/apple-watch-series-8'>
                  <a>
                    Apple Watch 8 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/apple-watch-ultra'>
                  <a>
                    Apple Watch Ultra 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/apple-watch-se-gen2'>
                  <a>
                    Apple Watch SE (2.Gen)  
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/apple-watch-series-7'>
                  <a>
                    Apple Watch 7
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/apple-watch-se'>
                  <a>
                    Apple Watch SE
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/apple-watch-nike'>
                  <a>
                    Apple Watch Nike
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-apple-watch'>
                  <a>
                    Accessories
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/services-for-apple-watch'>
                  <a>
                    Services
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/tv">TV</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/tv/apple-tv'>
                  <a>
                    Apple TV
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/tv/apple-tv-4k'>
                  <a>
                  Apple TV 4K
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/tv/tv'>
                  <a>
                    TV 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-apple-tv'>
                  <a>
                    Accessories
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/airpods">AirPods</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/accessories/audio/apple-airpods/tws-bluetooth-headsets-apple-airpods-pro-2-nd-generation-mqd83rua'>
                  <a>
                    AirPods Pro 2 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone/apple-airpods/tws-bluetooth-headsets-apple-airpods-gen-3-mme73rua'>
                  <a>
                    AirPods 3
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/apple-airpods?filter=23070%7CAirPods%20Max~124373526'>
                  <a>
                  AirPods Max
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone/apple-airpods/tws-bluetooth-headsets-apple-airpods-pro-mlwk3rua'>
                  <a>
                  AirPods Pro
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone/apple-airpods/tws-bluetooth-headsets-apple-airpods-mv7n2rua'>
                  <a>
                  AirPods 2
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone/apple-airpods/tws-bluetooth-headsets-apple-airpods-mrxj2rua'>
                  <a>
                  AirPods 2 Wireless Case
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/airpods-accessories'>
                  <a>
                    Accessories
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/accessories/acoustics">Audio</Link>
            <ul className="sub-menu">
              <li>
                <Link href='accessories/accessories-for-iphone/apple-airpods'>
                  <a>
                  AirPods
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/header-promotions/bang-and-olufsen'>
                  <a>
                  Bang & Olufsen
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/speakers?vendor=15574*15198'>
                  <a>
                  Loewe
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/headsets'>
                  <a>
                  Headphones
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/speakers'>
                  <a>
                    Speakers
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/accessories/accessories-for-mac'>
                  <a>
                  for Mac 
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-ipad'>
                  <a>
                  for iPad 
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone'>
                  <a>
                  for iPhone 
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-apple-watch'>
                  <a>
                  for Apple Watch
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/audio/airpods-accessories'>
                  <a>
                  for AirPods
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-apple-tv'>
                  <a>
                  for Apple TV
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-iphone/airtag"'>
                  <a>
                    AirTag 
                    <span >new</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/t/logitech'>
                  <a>
                  Logitech
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/accessories-for-mac/veb-kamery'>
                  <a>
                  Video conferencing equipment
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/smart-devices'>
                  <a>
                  Smart devices
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/promotions/bang-and-olufsen'>
                  <a>
                  Bang and Olufsen
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/tv/tv'>
                  <a>
                  Loewe
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/t/logitech'>
                  <a>
                  Logitech
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/accessories/smart-devices/smart-house?vendor=15853'>
                  <a>
                  JOULE
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/promotions/nativeunion'>
                  <a>
                  Native Union
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/promotions/satechi'>
                  <a>
                  Satechi
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/promotions/moshi'>
                  <a>
                  Moshi
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/promotions/tucano'>
                  <a>
                  Tucano
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/promotions/lacie'>
                  <a>
                  Lacie
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/services">Services</Link>
            <ul className="sub-menu">
              <li>
                <Link href='/iphone/services-for-iphone?filter=23169%7CWarranty%20Extension~127553078'>
                  <a>
                  Premium Warranty
                  </a>
                </Link>
              </li>
              <li>
                <Link href='mac/services-for-mac'>
                  <a>
                  for Mac
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ipad/services-for-ipad'>
                  <a>
                  for iPad
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iphone/services-for-iphone'>
                  <a>
                  for iPhone
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/apple-watch/services-for-apple-watch'>
                  <a>
                  for Apple Watch
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                  Видеоконсультации
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="offers-gift-nav">
          <li>
              <Link href="/special-offers">Special-offers</Link>
              <ul className="sub-menu">
              <li>
                <Link href='/t/apple-music'>
                  <a>
                  Get 6 Months Free Apple Music
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/information/kredit'>
                  <a>
                  Internal credit!
                  </a>
                </Link>
              </li>
            </ul>
            </li>
            <li>
              <Link href="/gifts">🎁 Gifts</Link>
            </li>
        </ul>
        <ul className="header-buttons">
          <li >
            <button className="btn" onClick={handleClickOpen}>
              <Compare/>
            </button>
          </li>
          <li >
            <button className="btn" onClick={handleClickOpen}>
              <WishList/>
            </button>
          </li>
          <Dialog open={open} onclose={handleClose}/>
         
          <li className="cart-btn">
            <Link href="/cart" >
            <a className="btn">
              <Cart/>
              {
                cart.cartTotalQuantity===0?(
                  <></>
                )
                :(
                  <span className="quantity-product">
                    {cart.cartTotalQuantity}
                  </span>

                )
              }
              <div className="cart-info">
                { cart.cartItems.length=== 0 ?(
                  <div className="no-product">
                    <p>Your cart is empty</p>
                  </div>
                )
                :(
                  <div className="product-list">
                  {cart.cartItems?.map((item, index)=>(
                    <div key={index} className="product-item">
                      <div className="product-info">
                        <figure className="item-img">
                          <picture>
                            <source srcSet={item.img} type="image/webp" />
                            <img src={item.img} alt="model" />
                          </picture>
                        </figure>
                        <div className="item-descr">
                          <p className="name">{item.name}</p>
                          <p className="amount">Quantity: {item.cartQuantity}</p>
                          <div className="prices-wrapper">
                            <p className="price">{item.price*item.cartQuantity} AZN</p>
                            <p className="price-nds "> Including VAT in the amount {item.vat*item.cartQuantity} AZN </p>
                          </div>

                        </div>

                      </div>

                    </div>
                  ))}

                  </div>

              )}

              </div>
              
              
            </a>
            </Link>
          </li>

        </ul>
      </nav>
      <div className="mobile-navbar">
        <div className="top">
        <button className="btn burger" onClick={showMobileNavbar}>
          <span className={` menu-icon ${menuButton}`}></span>
          <span className={`close-icon ${closeButton}`}></span>
        </button>
        <div className="logo" >
          <Link href="/">
          <a >
            {/* <Logo  className="logo-svg"/> */}
            <Image src={Logo_image} alt="logo"/>
          </a>
          </Link>
        </div>
        <div className="mobile-header-buttons">
          <div className="feature-item feature-callback">
            <Link href="/">
              <a className="callback">
                <Image src={Phone_photo} alt="phone"/>
              </a>
            </Link> 
          </div>
          <div className="feature-item feature-search">
            <button type="button" className='btn btn-search'>
              <Search/>
            </button>
          </div>
          <div className="feature-item feature-cart">
            <button type="button" className='btn btn-cart'>
              <Cart/>
            </button>
          </div>
          <div className="feature-item feature-cabinet">
            <button type="button" className='btn btn-sign-in'>
              <SignIn/>
            </button>
          </div>
        </div>

        </div>
        <div className={`main-mobile-navbar  ${show}`}>
          <div className="navbar-collapse-wrapper">
            <div className="nav-slider">
              <div className="nav-container">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link href="/mac">
                      <>
                        <a className="nav-link">Mac</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                      <ul className={`sub-menu ${subMenu}`}>
                        <li>
                          <Link href='/mac/macbook-pro'>
                            <a>
                              MacBook Pro 13" M2 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/macbook-air'>
                            <a>
                              MacBook Air 13.6" M2 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/imac'>
                            <a>
                              iMac 24"M1 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/mac-studio'>
                            <a>
                              Mac Studio  
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/accessories/accessories-for-mac/monitors'>
                            <a>
                              Monitors for Mac 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/macbook-pro'>
                            <a>MacBook Pro 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/macbook-air'>
                            <a>MacBook Air 
                              <span >new</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/mac-mini'>
                            <a>Mac mini
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='mac/imac'>
                            <a>iMac</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/mac-pro'>
                            <a>Mac Pro
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/accessories/accessories-for-mac'>
                            <a>Accessories</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/mac/services-for-mac'>
                            <a>Services</a>
                          </Link>
                        </li>

                      </ul>
                  </li>
                  <li className="nav-item">
                      <Link href="/ipad">
                      <>
                        <a className="nav-link">iPad</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/iphone">
                      <>
                        <a className="nav-link">iPhone</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/apple-watch">
                      <>
                        <a className="nav-link">Watch</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/tv">
                      <>
                        <a className="nav-link">TV</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/airpods">
                      <>
                        <a className="nav-link">AirPods</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/accessories/acoustics">
                      <>
                        <a className="nav-link">Audio</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/accessories">
                      <>
                        <a className="nav-link">Accessories</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/brands">
                      <>
                        <a className="nav-link">Brands</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/services">
                      <>
                        <a className="nav-link">Services</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/special-offers">
                      <>
                        <a className="nav-link">Special-offers</a>
                      </>
                      </Link>
                      <button className="btn-forward" onClick={showSubMenu}>
                        <Image src={Forward} alt="forward" />
                      </button>
                  </li>
                  <li className="nav-item">
                      <Link href="/gifts">
                      <>
                        <a className="nav-link">🎁 Gifts</a>
                      </>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
        

    </div>
        
    </div>
  </header>
  )
}

export default Header