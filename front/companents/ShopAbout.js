import React,{useState} from 'react'
import Image from 'next/image'
import AboutLogo from "../public/images/home/apr-shop-about-image.svg";

const ShopAbout = ({children, title}) => {
  const[show, setShow]=useState("Show full");
  const[display, setDisplay]=useState("none");
  const handleClick=()=>{
  
    if(show=="Show full"&& display=="none"){
      setShow("Show less");
      setDisplay("block")
    }
    if(show=="Show less"&& display=="block"){
      setShow("Show full");
      setDisplay("none")
    }
  }

  return (
    <section id="shop-about">
        <div className="container">
            <div className="total-content">
                <div className="about-logo">
                  <figure>

                    <Image src={AboutLogo} alt="logo" className="logo-img" style={{width:71, height:92, }}/>
                  </figure>
                </div>
                <div className="main-content">
                  <div className="content">
                    {title}
                  </div>
                  <div className={`more-content ${display}`}>
                    {children}
                  </div>
                  <button type="button" className={`btn-show-more`} onClick={handleClick}> {show} 
                   <span className="chevron-icon ng-tns-c155-35">›</span>
                  </button>
                </div>
                

            </div>

        </div>

      </section>
  )
}

export default ShopAbout