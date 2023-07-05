import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Img from "../public/images/footer/foot-info-image-az-1.webp"
import Logo from "../public/images/footer/almastore-footer-top-logo.svg"
import Visa from "../public/images/footer/accept-visa.svg"
import Master from "../public/images/footer/accept-mc.svg"

// svg
import {Facebook, Instagram} from "../public/svg/index"

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <footer id="footer">
      <div className="have-question">
        <div className="container">
          <div className="total-content">
            <figure className="footer-img">
              <Image src={Img} alt="worker-img"/>
            </figure>
            <div className="footer-info-content">
              <div className="head-content">
                <h4 className="title"> Do you have a question? </h4>
                <p className="text">Call us at the number below or contact us with the feedback button. <br/> We know all about Apple!</p>
              </div>
              <div className="main-content">
                <div className="online-service">
                  <div className="online-store">
                    <h4 className="title">Online Store</h4>
                    <ul>
                      <li>Tel: 
                      <Link href="tel:+994123101514">+994 (12) 310-15-14</Link>
                      </li>
                      <li>Mob: 
                      <Link href="tel:+994507760050">+994 (50) 776-00-50</Link>
                      </li>
                      <li>Mon - Thu: 09:00 - 22:00</li>
                    </ul>
                  </div>
                  <div className="service">
                  <h4 className="title">Service</h4>
                    <ul>
                      <li>Tel: 
                      <Link href="tel:+994124935434">+994 12 493 54 34</Link>
                      </li>
                      <li>Mob: 
                      <Link href="tel:+994507660025">+994 50 766 00 25</Link>
                      </li>
                      <li>Mon - Sun: 08:00 - 22:00</li>
                    </ul>
                  </div>
                </div>
                <div className="addresses">
                  <div className="shop-info-item">
                    <p className="name">Park Bulvar Mall, 1st floor</p>
                    <p className="tel">
                      <Link href="tel:+994125987321">Tel.+994 (12) 598-73-21</Link>
                    </p>
                    <p className="tel">
                      <Link href="tel:+994507660030">Mob.+994 (50) 766-00-30</Link>
                    </p>
                    <p className="address">Mon - Thu: 10:00 - 22:00<br/>Neftchilar Avenue 42</p>
                  </div>
                  <div className="shop-info-item">
                    <p className="name">Port Baku, 1st floor</p>
                    <p className="tel">
                      <Link href="tel:+994124640434">Tel.+994 (12) 464-04-34</Link>
                    </p>
                    <p className="tel">
                      <Link href="tel:+994507760015">Mob.+994 (50) 776-00-15</Link>
                    </p>
                    <p className="address">Mon - Thu: 10:00 - 22:00<br/>Neftchilar Avenue 151</p>
                  </div>
                  <div className="shop-info-item">
                    <p className="name">Deniz Mall, 1st floor</p>
                    <p className="tel">
                      <Link href="tel:+994125258500">Tel.+994 (12) 525-85-00</Link>
                    </p>
                    <p className="tel">
                      <Link href="tel:+994507660020">Mob.+994 (50)-766-00-20</Link>
                    </p>
                    <p className="address">Mon - Thu: 10:00 - 22:00<br/>Neftchilar Avenue 26a</p>
                  </div>
                  <div className="shop-info-item">
                    <p className="name">28 Mall, 1st floor</p>
                    <p className="tel">
                      <Link href="tel:+994124998716">Tel.+994 (12) 499-87-16</Link>
                    </p>
                    <p className="tel">
                      <Link href="tel:+994502510014">Mob.+994 (50) 251-00-14</Link>
                    </p>
                    <p className="address">Mon - Thu: 10:00 - 22:00<br/>Azadliq Avenue 15a/4</p>
                  </div>
                </div>
              </div>
              <div className="footer-info-callback">
                <button type="button" className="btn callback-btn"> Feedback </button>
                <Link href="https://bcrw.apple.com/urn:biz:05c14e2e-6678-4c00-8075-e1020cd21c94"  >
                
                  <a className="callback-btn iMessageBtn">
                    <picture>
                      <source srcSet="https://cdn0.it4profit.com/files/7/imessage-logo.svg" type="image/webp" />
                      <img src="https://cdn0.it4profit.com/files/7/imessage-logo.svg" alt="imessage" />
                    </picture>
                    <span >Message Us</span>
                  </a>
                </Link>
                <Link  href="https://wa.me/994507760050">
                <a className="callback-btn whatsAppBtn ">
                  <picture>
                    <source srcSet="https://cdn0.it4profit.com/files/7/wahtsapp-icon.svg" type="image/webp" />
                    <img src="https://cdn0.it4profit.com/files/7/wahtsapp-icon.svg" alt="whatsapp" />
                  </picture>
                  <span className="  whatsAppBtn_title">Write to Whatsapp</span>
                </a>
                </Link>
                <p  className="descr">Or email us at 
                  <Link href="mailto:info@almastore.az"> info@almastore.az </Link>
                  ; For Business 
                  <Link href="mailto:"> business@asbc.az </Link>
                </p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-top">
            <figure className="footer-logo">
            <Image src={Logo} alt="logo"/>
            </figure>
            <div className="footer-socials">
              <span  className="socials-label"> Us on social network: </span>
              <ul className="socials-list">
                <li className="list-item">
                  <Link href="https://www.facebook.com/almastorepage">
                  <>

                    <Facebook/>
                  </>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="https://www.instagram.com/almastore/">
                  <>
                    <Instagram/>
                  </>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-container">
                <ul className="footer-nav-list">
                  <li className="footer-nav-list-item">
                    <Link href="/gift-certificate"> Gift Certificate </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/gift-certificate/gift-cart"> Gift Certificate </Link>
                  </li>
                </ul>
                <ul className="footer-nav-list">
                  <li  className="footer-nav-list-item">
                    <Link href="/mac"> Mac </Link>
                  </li>
                  <li className="footer-nav-list-item ">
                    <Link href="/mac/macbook-pro"> MacBook Pro </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/mac/macbook-air"> MacBook Air </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/mac/imac"> iMac </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/mac/mac-pro"> Mac Pro </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/mac/mac-mini"> Mac Mini </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/mac/mac-studio"> Mac Studio </Link>
                  </li>
                  <li className="footer-nav-list-item ">
                    <Link href="/mac/services-for-mac"> Services for Mac </Link>
                  </li>
                </ul>   
                <ul className="footer-nav-list">
                  <li className="footer-nav-list-item ">
                    <Link href="/ipad"> iPad </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/ipad/ipad-pro-11"> iPad Pro 11 </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/ipad/ipad-pro-129"> iPad Pro 12,9 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/ipad/ipad-mini-5"> iPad mini 6 </Link>
                  </li>
                  <li className="footer-nav-list-item ">
                    <Link  href="/ipad/ipad-102"> iPad 10,2 </Link>
                  </li>
                  <li  className="footer-nav-list-item ">
                    <Link href="/ipad/services-for-ipad"> Services for iPad </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/ipad/ipad-air-5"> iPad Air 5 </Link>
                  </li>
                </ul>
                <ul  className="footer-nav-list">
                  <li className="footer-nav-list-item">
                    <Link href="/iphone"> iPhone </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/iphone/iphone-14-plus"> iPhone 14 Plus </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/iphone/iphone-14-pro-max"> iPhone 14 Pro Max </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/iphone/iphone-14"> iPhone 14 </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link  href="/iphone/iphone-14-pro"> iPhone 14 Pro </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link  href="/iphone/iphone-se"> iPhone SE </Link>
                  </li>
                  <li className="footer-nav-list-item ">
                    <Link  href="/iphone/iphone-11"> iPhone 11 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link  href="/iphone/iphone-12"> iPhone 12 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/iphone/iphone-13"> iPhone 13 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link  href="/iphone/iphone-13-mini"> iPhone 13 mini </Link>
                  </li>
                  <li  className="footer-nav-list-item ">
                    <Link href="/iphone/iphone-13-pro"> iPhone 13 Pro </Link>
                  </li>
                  <li  className="footer-nav-list-item ">
                    <Link href="/iphone/iphone-13-pro-max"> iPhone 13 Pro Max </Link>
                  </li>
                  <li  className="footer-nav-list-item ">
                    <Link href="/iphone/services-for-iphone"> Services for iPhone </Link>
                  </li>
                </ul>
                <ul className="footer-nav-list">
                  <li className="footer-nav-list-item">
                    <Link href="/apple-watch"> Apple Watch </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/apple-watch/apple-watch-se-gen2"> Apple Watch SE Gen.2 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/apple-watch/apple-watch-series-8"> Apple Watch Series 8 </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/apple-watch/apple-watch-ultra"> Apple Watch Ultra </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link  href="/apple-watch/apple-watch-series-7"> Apple Watch Series 7 </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/apple-watch/apple-watch-se"> Apple Watch SE </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/apple-watch/apple-watch-nike"> Apple Watch Nike </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/apple-watch/services-for-apple-watch"> Services for Apple Watch </Link>
                  </li>
                </ul>
                <ul className="footer-nav-list">
                  <li  className="footer-nav-list-item">
                    <Link href="/tv"> Apple TV </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/tv/tv"> TV Loewe </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/tv/apple-tv"> Apple TV </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/tv/apple-tv-4k"> Apple TV 4K </Link>
                  </li>
                </ul>
                <ul className="footer-nav-list">
                  <li  className="footer-nav-list-item ">
                    <Link href="/accessories"> Accessories </Link>
                  </li>
                  <li  className="footer-nav-list-item ">
                    <Link href="/accessories/audio"> Audio </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/accessories/smart-devices"> Smart Devices </Link>
                  </li>
                  <li className="footer-nav-list-item ">
                    <Link href="/accessories/gift-cards"> Gift Cards </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/accessories/accessories-for-mac"> Accessories for Mac </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/accessories/accessories-for-apple-tv"> Accessories for Apple TV </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/accessories/accessories-for-ipad"> Accessories for iPad </Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/accessories/accessories-for-iphone"> Accessories for iPhone </Link>
                  </li>
                  <li  className="footer-nav-list-item">
                    <Link href="/accessories/accessories-for-apple-watch"> Accessories for Apple Watch </Link>
                  </li>
                </ul>
            </div>
            <div className="footer-container">
              <ul className="footer-nav-list">
                <li className="footer-nav-list-item">
                  <Link href="/information"> Information </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/about"> About </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/kredit"> Installment </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/terms-of-sale"> Terms of sale </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/privacy-policy"> Privacy policy </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/taxfree"> Tax Free </Link>
                </li>
                <li className="footer-nav-list-item ng-star-inserted">
                  <Link href="/vacancy"> Vacancy </Link>
                </li>
                <li  className="footer-nav-list-item">
                  <Link href="/information/qarantiya"> Warranty </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-list-item">
                  <Link href="/information/servis-alma-store"> Alma Service </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link  href="/information/kredit"> installment </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/information/dostavka-po-baku"> Delivery in Baku and regions </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link  href="/information/servis-alma-store"> Alma Service </Link>
                </li>
              </ul>
              <ul className="footer-nav-list ">
                <li className="footer-nav-list-item">
                  <Link href="/for-clients"> For clients </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link  href="/for-clients/karta-klienta"> Client card </Link>
                </li>
              </ul>
              <ul className="footer-nav-list">
                <li className="footer-nav-list-item">
                  <Link href="/press-releases"> Press releases </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Link href="/news"> News </Link>
                </li>
                <li  className="footer-nav-list-item">
                  <Link href="/press-releases"> press-releases </Link>
                </li>
                <li  className="footer-nav-list-item">
                  <Link href="/reviews"> Reviews </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-main-mobile">
            <div className="footer-container foot-container-accordion">
              <div className="footer-accordion">
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Gift Certificate</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/gift-certificate"> Gift Certificate </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/gift-certificate/gift-cart"> Gift Certificate </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Mac</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li  className="footer-nav-list-item">
                          <Link href="/mac"> Mac </Link>
                        </li>
                        <li className="footer-nav-list-item ">
                          <Link href="/mac/macbook-pro"> MacBook Pro </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/mac/macbook-air"> MacBook Air </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/mac/imac"> iMac </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/mac/mac-pro"> Mac Pro </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/mac/mac-mini"> Mac Mini </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/mac/mac-studio"> Mac Studio </Link>
                        </li>
                        <li className="footer-nav-list-item ">
                          <Link href="/mac/services-for-mac"> Services for Mac </Link>
                        </li>
                      </ul>  
                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">iPad</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item ">
                          <Link href="/ipad"> iPad </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/ipad/ipad-pro-11"> iPad Pro 11 </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/ipad/ipad-pro-129"> iPad Pro 12,9 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/ipad/ipad-mini-5"> iPad mini 6 </Link>
                        </li>
                        <li className="footer-nav-list-item ">
                          <Link  href="/ipad/ipad-102"> iPad 10,2 </Link>
                        </li>
                        <li  className="footer-nav-list-item ">
                          <Link href="/ipad/services-for-ipad"> Services for iPad </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/ipad/ipad-air-5"> iPad Air 5 </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">iPhone</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul  className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/iphone"> iPhone </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/iphone/iphone-14-plus"> iPhone 14 Plus </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/iphone/iphone-14-pro-max"> iPhone 14 Pro Max </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/iphone/iphone-14"> iPhone 14 </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link  href="/iphone/iphone-14-pro"> iPhone 14 Pro </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link  href="/iphone/iphone-se"> iPhone SE </Link>
                        </li>
                        <li className="footer-nav-list-item ">
                          <Link  href="/iphone/iphone-11"> iPhone 11 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link  href="/iphone/iphone-12"> iPhone 12 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/iphone/iphone-13"> iPhone 13 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link  href="/iphone/iphone-13-mini"> iPhone 13 mini </Link>
                        </li>
                        <li  className="footer-nav-list-item ">
                          <Link href="/iphone/iphone-13-pro"> iPhone 13 Pro </Link>
                        </li>
                        <li  className="footer-nav-list-item ">
                          <Link href="/iphone/iphone-13-pro-max"> iPhone 13 Pro Max </Link>
                        </li>
                        <li  className="footer-nav-list-item ">
                          <Link href="/iphone/services-for-iphone"> Services for iPhone </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Apple Watch</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/apple-watch"> Apple Watch </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/apple-watch/apple-watch-se-gen2"> Apple Watch SE Gen.2 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/apple-watch/apple-watch-series-8"> Apple Watch Series 8 </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/apple-watch/apple-watch-ultra"> Apple Watch Ultra </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link  href="/apple-watch/apple-watch-series-7"> Apple Watch Series 7 </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/apple-watch/apple-watch-se"> Apple Watch SE </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/apple-watch/apple-watch-nike"> Apple Watch Nike </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/apple-watch/services-for-apple-watch"> Services for Apple Watch </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Apple TV </span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li  className="footer-nav-list-item">
                          <Link href="/tv"> Apple TV </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/tv/tv"> TV Loewe </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/tv/apple-tv"> Apple TV </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/tv/apple-tv-4k"> Apple TV 4K </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Accessories</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li  className="footer-nav-list-item ">
                          <Link href="/accessories"> Accessories </Link>
                        </li>
                        <li  className="footer-nav-list-item ">
                          <Link href="/accessories/audio"> Audio </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/accessories/smart-devices"> Smart Devices </Link>
                        </li>
                        <li className="footer-nav-list-item ">
                          <Link href="/accessories/gift-cards"> Gift Cards </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/accessories/accessories-for-mac"> Accessories for Mac </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/accessories/accessories-for-apple-tv"> Accessories for Apple TV </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/accessories/accessories-for-ipad"> Accessories for iPad </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/accessories/accessories-for-iphone"> Accessories for iPhone </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/accessories/accessories-for-apple-watch"> Accessories for Apple Watch </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Information</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/information"> Information </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/about"> About </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/kredit"> Installment </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/terms-of-sale"> Terms of sale </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/privacy-policy"> Privacy policy </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/taxfree"> Tax Free </Link>
                        </li>
                        <li className="footer-nav-list-item ng-star-inserted">
                          <Link href="/vacancy"> Vacancy </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/information/qarantiya"> Warranty </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Alma Service</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/information/servis-alma-store"> Alma Service </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link  href="/information/kredit"> installment </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/information/dostavka-po-baku"> Delivery in Baku and regions </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link  href="/information/servis-alma-store"> Alma Service </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">For clients</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list ">
                      <li className="footer-nav-list-item">
                        <Link href="/for-clients"> For clients </Link>
                      </li>
                      <li className="footer-nav-list-item">
                        <Link  href="/for-clients/karta-klienta"> Client card </Link>
                      </li>
                    </ul>

                    </div>
                  </div>}
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="accordion-title">Press releases</span>
                    <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && 
                  <div className="accordion-content">
                    <div className="content-body">
                      <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                          <Link href="/press-releases"> Press releases </Link>
                        </li>
                        <li className="footer-nav-list-item">
                          <Link href="/news"> News </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/press-releases"> press-releases </Link>
                        </li>
                        <li  className="footer-nav-list-item">
                          <Link href="/reviews"> Reviews </Link>
                        </li>
                      </ul>

                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <div className="footer-container">
             <div className="footer-text-container">
              <h4> "ASBC" Limited Liability Company.<br/>
                    Certificate No. 1403779711, issued on August 10, 2017<br/>
                    Ministry of Taxes of the Azerbaijan Republic.<br/>
                    Date of registration in the Commercial Register<br/>
                    Republic of Azerbaijan: 08.05.2017
                    <strong><br/><br/>
                      Copyright © 2019 ASBC MMC. All rights reserved.
                    </strong>
              </h4>
              <p> &nbsp;</p>
              <p>&nbsp; </p>
             </div>
             <div className="footer-text-container">
              <p>Business center "Yeni Hayat Plaza"<br/>
                 st. Zarifa Aliyeva 111, 2nd floor, office 5.<br/>
                 Baku, Azerbaijan, AZ 1010.<br/>
                 Tel.: <Link href="tel:+994124932888">+994 12 493 28 88</Link>, 
                 <Link href="tel:+994124937333">+994 12 493 73 33</Link>
              </p>
             </div>
             <div className="footer-text-container">
              <p className="footer-payment-title">We accept:</p>
              <Image src={Visa} alt="visa" className="footer-payment-img"/>
              <Image src={Master} alt="master" className="footer-payment-img"/>
             </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer