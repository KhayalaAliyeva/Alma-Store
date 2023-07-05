import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Location from "../../../public/images/information/about/location.svg"
import Phone from "../../../public/images/information/about/phone.svg"
import Clock from "../../../public/images/information/about/clock.svg"
import Layout from "../../../companents/Layout"
import Navigationn from '../../../companents/Navigationn'
import PageHeader from '../../../companents/PageHeader'

const About = () => {
  return (
    <div>
        <Layout>
        <Navigationn>
            <li className="breadcrumb-item">
                <Link href="/information">
                <a>
                    Information
                </a> 
                </Link>
            </li>   
            <li className="breadcrumb-item">
                <Link href="/information/about">
                <a>
                    About
                </a> 
                </Link>
            </li>    
        </Navigationn>
        <PageHeader header="About"/>
        <section id="addresses">
            <div className="container">
                <div className="total-content">
                    <div className="block-wrapper">
                        <div className="block">
                            <div className="header">"Park Bulvar" Mall, 1st floor</div>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <Image src={Location} alt="geo-icon"/>1st floor,
                                    Bulvar
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940125987321">
                                        <a >(012) 598 73 21</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940507660030">
                                        <a>(050) 766 00 30</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Clock} alt="time-icon"/>mon – sun: 10:00 –
                                    22:00
                                </div>
                            </div>
                            <Link href="#">
                                <a className="map-link" data-map="0" target="map">Show on map</a>
                            </Link>
                        </div>
                        <div className="block">
                            <div className="header">"Port Baku" Mall, 1st floor</div>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <Image src={Location} alt="geo-icon"/> "Port
                                        Baku" Mall, 1st floor, Baku
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940124640434">
                                        <a >(012) 464 04 34</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940507760015">
                                        <a >(050) 776 00 15</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Clock} alt="time-icon"/>mon – sun: 10:00 –22:00
                                </div>
                            </div>
                            <Link href="#">
                                <a  className="map-link" data-map="1" target="map">Show on map</a>
                            </Link>
                        </div>
                        <div className="block">
                            <div className="header">"28 Mall", 1st floor</div>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <Image src={Location} alt="geo-icon"/> "28
                                    Mall", 1st floor, Baku
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940124998716">
                                        <a>(012) 499 87 16</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940502510014">
                                        <a>(050) 251 00 14</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Clock} alt="time-icon"/> mon – sun: 10:00 –
                                    22:00
                                </div>
                            </div>
                            <Link href="#" >
                                <a className="map-link" data-map="2" target="map">Show on map</a>
                            </Link>
                        </div>
                        <div className="block">
                            <div className="header">"Deniz Mall", 1st floor</div>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <Image src={Location} alt="geo-icon"/> "Deniz
                                    Mall", 1st floor, Baku
                                </div>

                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940125258500">
                                        <a >(012) 525 85 00</a>
                                    </Link>
                                </div>

                                <div className="pull-left">
                                    <Image src={Phone} alt="phone-icon"/>
                                    <Link href="tel:+9940507660020">
                                        <a>(050) 766 00 20</a>
                                    </Link>
                                </div>
                                <div className="pull-left">
                                    <Image src={Clock} alt="time-icon"/> mon – sun: 10:00 –
                                    22:00
                                </div>
                            </div>
                            <Link href="#">
                                <a  className="map-link" data-map="3" target="map">Show on map</a>
                            </Link>
                        </div>
                    </div>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.812429385362!2d49.8503508!3d40.371107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63a8e8d33fbe46bc!2sAlma%20Store!5e0!3m2!1str!2s!4v1669385981681!5m2!1str!2s"  style={{width:"100%", height:"100%",}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </section>
        <section id="info">
            <div className="container">
                <div className="total-info">
                    <h3>&nbsp;</h3>
                    <p>Alma Store – Apple's official partner in Azerbaijan with Apple Authorised Reseller status.&nbsp;</p>
                    <p>Apple Authorised Reseller status is granted only to professionals in their business.</p>
                    <p>Alma Store brings you to Apple's environment where officially trained experts will help you with your product selection, teach you how to use it, and give you useful tips.</p>
                    <p>Our consultants are qualified as Apple experts while Apple's high quality, comfortable and easy-to-use devices deliver customer satisfaction and almost don’t require technical assistance.
                    <br/><br/>
                    In Alma Store you will also find a great range of accessories for Mac, iPhone, iPad and iPod. Apart from that you will also be able to buy premium brand of audio systems Bang &amp; Olufsen. Our qualified consultants will help you choose the devices you need and teach you how to use them.</p>
                    <p>You will always find what you need at our store.</p>
                    <h3> <br/> </h3>
                    </div>
            </div>
        </section>
            
        </Layout>
    </div>
  )
}

export default About