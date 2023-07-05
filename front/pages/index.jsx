import Link from 'next/link'
import Image from 'next/image'
import swal from 'sweetalert'
// images
import D_Swiper1 from "../public/images/home/swiper/desktop/1.webp"
import D_Swiper2 from "../public/images/home/swiper/desktop/2.webp"
import D_Swiper3 from "../public/images/home/swiper/desktop/3.webp"
import D_Swiper4 from "../public/images/home/swiper/desktop/4.webp"
import D_Swiper5 from "../public/images/home/swiper/desktop/5.webp"
import D_Swiper6 from "../public/images/home/swiper/desktop/6.webp"
import D_Swiper7 from "../public/images/home/swiper/desktop/7.webp"
import D_Swiper8 from "../public/images/home/swiper/desktop/8.webp"
import D_Swiper9 from "../public/images/home/swiper/desktop/9.webp"
import D_Swiper10 from "../public/images/home/swiper/desktop/10.webp"
import D_Swiper11 from "../public/images/home/swiper/desktop/11.webp"


import M_Swiper1 from "../public/images/home/swiper/mobile/1.webp"
import M_Swiper2 from "../public/images/home/swiper/mobile/2.webp"
import M_Swiper3 from "../public/images/home/swiper/mobile/3.webp"
import M_Swiper4 from "../public/images/home/swiper/mobile/4.webp"
import M_Swiper5 from "../public/images/home/swiper/mobile/5.webp"
import M_Swiper6 from "../public/images/home/swiper/mobile/6.webp"
import M_Swiper7 from "../public/images/home/swiper/mobile/7.webp"
import M_Swiper8 from "../public/images/home/swiper/mobile/8.webp"
import M_Swiper9 from "../public/images/home/swiper/mobile/9.webp"
import M_Swiper10 from "../public/images/home/swiper/mobile/10.webp"
import M_Swiper11 from "../public/images/home/swiper/mobile/11.webp"


import AboutLogo from "../public/images/home/apr-shop-about-image.svg";

import Features1 from "../public/images/companenets/shop-features-crard/s-feature-card-icon.svg"
import Features2 from "../public/images/companenets/shop-features-crard/s-feature-car-icon.svg"
import Features3 from "../public/images/companenets/shop-features-crard/s-feature-tools-icon.svg"
import Features4 from "../public/images/companenets/shop-features-crard/s-feature-ppl-icon.svg"

//companents
import Layout from "../companents/Layout"
import HomeMiniCard from '../companents/HomeMiniCard'
import CategoryPanelCard from '../companents/CategoryPanelCard'
import ShopAbout from '../companents/ShopAbout'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from "swiper";
import { Navigation } from 'swiper';

// form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _ from "../companents/@lodash/index.js";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";


const schema = yup.object().shape({
	name: yup.string().required("Required field"),
	email: yup.string().email("Invalid email format").required("Required field"),
  checkbox:yup.boolean().oneOf([true], "Required field"),
  });
  const defaultValues = {
    name: "",
    email: "",
    checkbox:"",
  };
export default function Home() {
  SwiperCore.use([Autoplay]);

  const { control, formState, handleSubmit, watch, register, setValue } = 
  useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });
	const { isValid, dirtyFields, errors, setError } = formState;
	function onSubmit({ name, email}) {
    // console.log(name, email);
    swal({
      title: "Thanks!",
      text: "The newsletter subscription request has been successfully sent.",
      icon: "success",
      button: "Ok",
    });
  }
  
  return (
    <div >
    <Layout title="the official Apple Premium Reseller in Azerbaijan">
      <section id="swiper">
        <div className="desktop-size">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay:3000
            }
            }
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
          <div className="container">
          <SwiperSlide className="bg-grey">
              <Link href="/mac">
              <>
                <Image src={D_Swiper1} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={D_Swiper2} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-violet">
              <Link href="/mac">
              <>
                <Image src={D_Swiper3} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-orange">
              <Link href="/mac">
              <>
                <Image src={D_Swiper4} alt="swiper" />
              </>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={D_Swiper5} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white" >
              <Link href="/mac">
              <>
                <Image src={D_Swiper6} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={D_Swiper7} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={D_Swiper8} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-yellow">
              <Link href="/mac">
              <>
                <Image src={D_Swiper9} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <> 
                <Image src={D_Swiper10} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={D_Swiper11} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
          </div>
            
            
          </Swiper>
        </div>
          <div className="tablet-mobile-size">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay:3000
            }
            }
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
          <div className="container">
          <SwiperSlide className="bg-grey">
              <Link href="/mac">
              <>
                <Image src={M_Swiper1} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">
            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={M_Swiper2} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">
            <SwiperSlide className="bg-violet">
              <Link href="/mac">
              <>
                <Image src={M_Swiper3} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-orange">
              <Link href="/mac">
              <>
                <Image src={M_Swiper4} alt="swiper" />
              </>
              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={M_Swiper5} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white" >
              <Link href="/mac">
              <>
                <Image src={M_Swiper6} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={M_Swiper7} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={M_Swiper8} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-yellow">
              <Link href="/mac">
              <>
                <Image src={M_Swiper9} alt="swiper"/>
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <> 
                <Image src={M_Swiper10} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
            <div className="container">

            <SwiperSlide className="bg-white">
              <Link href="/mac">
              <>
                <Image src={M_Swiper11} alt="swiper" />
              </>

              </Link>
            </SwiperSlide>
            </div>
          
            
            
          </Swiper>
          </div>
      </section>
      <section id="home-first-cards">
      <div className='container'>
       <div className="home-mini-cards">
          <HomeMiniCard link="/accessories/acoustics/apple-airpods" name="AirPods." content="No wires, no difficulties" button=" Buy " featureX="feature-1"/>
          <HomeMiniCard link="accessories/accessories-for-iphone" name="iPhone 13 and iPhone 13 Pro Cases" content="Perfect pair" button=" Order " featureX="feature-2"/>
          <HomeMiniCard none="display-none"link="/for-clients/karta-klienta" name="AlmaStore Wallet Card" content="Add your AlmaStore card in Wallet" button=" Details " featureX="feature-3"/>
       </div>

      </div>
      </section>
      <section id="category-panels">
        <div className="container">
            <div className="category-panel-cards ">
              <CategoryPanelCard link="/iphone" size="size-1" featureX="feature-1" name="iPhone" content=" Products 265 "/>
              <div className="panel-cards-1">
                <CategoryPanelCard link="/mac" size="size-2" featureX="feature-2" name="Mac" content=" Products 105 "/>
                <CategoryPanelCard link="/accessories" size="size-3" featureX="feature-3" name=" Accessories " content="  Products 4772 "/>
                <CategoryPanelCard link="/mac/mac-mini" size="size-3" featureX="feature-4" name="Mac mini" content="Products 2"/>
              </div>
              <div className="panel-cards-2">
                <CategoryPanelCard link="/ipad" size="size-2" featureX="feature-5" name="iPad" content=" Products 90 "/>
                <CategoryPanelCard link="/tv" size="size-2" featureX="feature-6" name="Apple TV" content=" Products 26 "/>
              </div>

            </div>
            <div className="category-panel-cards-md">
                <CategoryPanelCard link="/mac" size="size-2" featureX="feature-2" name="Mac" content=" Products 105 "/>
              
                <CategoryPanelCard link="/iphone" size="size-3" featureX="feature-1" name="iPhone" content=" Products 265 "/>
             
              <div className="panel-cards-right"> 
                <CategoryPanelCard link="/ipad" size="size-2" featureX="feature-5" name="iPad" content=" Products 90 "/>
                <CategoryPanelCard link="/accessories" size="size-2" featureX="feature-3" name=" Accessories " content="  Products 4772 "/>
               </div>
              
                <CategoryPanelCard link="/mac/mac-mini" size="size-3" featureX="feature-4" name="Mac mini" content="Products 2"/>
                <CategoryPanelCard link="/tv" size="size-3" featureX="feature-6" name="Apple TV" content=" Products 26 "/>
              

            </div>
            <div className="category-panel-cards-xs">
              <CategoryPanelCard link="/iphone" size="size-2" featureX="feature-1" name="iPhone" content=" Products 265 "/>
              <CategoryPanelCard link="/mac" size="size-2" featureX="feature-2" name="Mac" content=" Products 105 "/>
              <CategoryPanelCard link="/ipad" size="size-2" featureX="feature-5" name="iPad" content=" Products 90 "/>
              <CategoryPanelCard link="/accessories" size="size-2" featureX="feature-3" name=" Accessories " content="  Products 4772 "/>
              <CategoryPanelCard link="/mac/mac-mini" size="size-2" featureX="feature-4" name="Mac mini" content="Products 2"/>
              <CategoryPanelCard link="/tv" size="size-2" featureX="feature-6" name="Apple TV" content=" Products 26 "/>

            </div>
                  
        </div>
      </section>
      <ShopAbout title={<>
          <h1>Alma Store - Apple's official partner in Azerbaijan with Apple Premium Reseller status.</h1>
          <h4>Apple Premium Reseller status is granted only to professionals in their business.</h4></>
          }>
          <p>In Alma Store you can work with any Mac, iPhone or iPad, watch demonstrations of the latest Apple inc products or take part in trainings, workshops and events dedicated to the latest technologies. Just ask and we will find the right course for you. We know everything about Apple products. And we are ready to share our knowledge.</p>
          <p>Our store with the status of Apple Premium Reseller - Alma Store - always has a huge range of accessories for Mac, iPhone, iPad, iPod, Apple Watch, AirTag, AirPods. In addition, our qualified Apple experts can help you select third-party products and solutions available for the Apple Store products. They will carefully consider your preferences and give professional, objective advice.</p>
          <p>If you are in another country, then you can purchase Apple equipment at the following APRs: Apple Store Ukraine, Apple Store Kazakhstan, Apple Store Belarus, Apple Store Georgia.</p>
          <p>In our store you will always buy everything you need.</p>
        
      </ShopAbout>
      <section id="shop-features">
        <div className="container">
           <div className="shop-features-cards">
             <div className="shop-features-card">
              <figure className="item-img">
                <Image src={Features1} alt="feature-item"/>
              </figure>
              <div className="item-content">
                <Link href="/information/kredit"> 
                <>
                  <a className="f-link">
                    Installment payment 
                  </a>
                  <p className="f-descr"> With the terms of our installment payment offer, Apple's technology will really suit any budget. </p>

                </>
                </Link>
              </div>
             </div>
             <div className="shop-features-card">
              <figure className="item-img">
                <Image src={Features2} alt="feature-item"/>
              </figure>
              <div className="item-content">
                <Link href="/information/kredit"> 
                <>
                  <a className="f-link">
                    Installment payment 
                  </a>
                  <p className="f-descr" > With the terms of our installment payment offer, Apple's technology will really suit any budget. </p>

                </>
                </Link>
              </div>
             </div>
             <div className="shop-features-card">
              <figure className="item-img">
                <Image src={Features3} alt="feature-item"/>
              </figure>
              <div className="item-content">
                <Link href="/information/kredit"> 
                <>
                  <a className="f-link">
                    Installment payment 
                  </a>
                  <p className="f-descr"> With the terms of our installment payment offer, Apple's technology will really suit any budget. </p>

                </>
                </Link>
              </div>
             </div>
             <div className="shop-features-card">
              <figure className="item-img">
                <Image src={Features4} alt="feature-item"/>
              </figure>
              <div className="item-content">
                <Link href="/information/kredit"> 
                <>
                  <a className="f-link">
                    Installment payment 
                  </a>
                  <p className="f-descr"> With the terms of our installment payment offer, Apple's technology will really suit any budget. </p>

                </>
                </Link>
              </div>
             </div>
           </div>
        </div>

      </section>
      <section id="news-subscribe">
        <div className="container">
          <div className="total-content">
            <div className="subs-content">
              <h3 className="subs-title"> Learn first about the news </h3>
              <p className="subs-text"> Subscribe to our newsletter and be first to learn about new promotions and special offers! </p>
            </div>
            <div className="subs-form">
              <form
                name="registerForm"
                noValidate
                className="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="name"
                  control={control}
                  className="subs-form-input input-name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="standard-start-adornment"
                      label="Name"
                      type="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      size="small"
                      mb={2}
                      
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  className="subs-form-input input-email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="standard-start-adornment"
                      label="E-mail"
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      required
                      size="small"
                    />
                  )}
                />
                <div className="checkbox-group">
                <div className="checkbox-and-label">
                <Controller
                  name="checkbox"
                  control={control}
                  className="checkbox"
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      id="standard-start-adornment"
                      type="checkbox"
                      value=""
                      required
                      size="small"
                      color='primary'
                      
      
                    />
                  )}
                />
                <Typography className="checkbox-label">I agree to the terms of the 
                <span > subscription</span>
                </Typography>

                </div>
                
                 {errors.checkbox ? (
                    <span className="checkbox-error">{errors.checkbox.message}</span>
                    ) :
                    (
                      <></>
                    )
                  }

                </div>
                 
                <Button
                  variant="contained"
                  color="secondary"
                  className=" btn-subs"
                  aria-label="Subscribe"
                  type="submit"
                  size="small"

                >
                   Subscribe 
                </Button>
               
              </form>
            

            </div>
          </div>
        </div>
      </section>

    </Layout>
      
    </div>
  )
}
