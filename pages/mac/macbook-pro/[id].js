import React,{useState,useEffect,useRef} from 'react'
import { useRouter, } from 'next/router'
import axios from "axios";
import Link from 'next/link'
import Image from 'next/image';
import Cart from "../../../public/images/detail/catalog-add-cart-icon.svg"
import Image1 from "../../../public/images/detail/slider1.webp"
import Image2 from "../../../public/images/detail/slider2.webp"
import Image3 from "../../../public/images/detail/Slider3.webp"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cartSlice'
import { useGetAllProductsQuery } from '../../../features/productsApi'
import swal from 'sweetalert'

// companents
import Layout from '../../../companents/Layout';
import Navigationn from '../../../companents/Navigationn';
import PageHeader from '../../../companents/PageHeader';
import ProductImagesSlider from '../../../companents/ProductImageSlider';
// import { productImages } from '../../../utils/index'

// svg
import {Compare, WishList} from "../../../public/svg/index"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";



const Details = () => {
   

    const [productData, setProductData]=useState([]);
    
    const {data, error, isLoading}=useGetAllProductsQuery();
    const dispatch=useDispatch();
    // let {id}=useParams();
    const {query}= useRouter();
    let { id } = query;
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:9000/macbook-pro/${id}`).then((response)=>{
            // response.data.data
            // console.log(response.data.data)
            setProductData(response.data.data);
            
        })
    },[])
    // console.log(productData);
    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        swal({
            title: "The product has been added to your cart!",
            icon: "success",
            button: "Ok",
          });
    
      }
  return (
    
    <div className="details-page">
        <Layout>
            <Navigationn>
            <li className="breadcrumb-item">
                <Link href="/mac">
                <a>
                    Mac
                </a> 
                </Link>

            </li>
            <li className="breadcrumb-item">
                <Link href="/mac/macbook-pro">
                <a>
                    MacBook Pro
                </a> 
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link href={`/mac/macbook-pro/${productData.id}`}>
                <a>
                    {productData.name}
                </a> 
                </Link>
            </li>
            </Navigationn>
            <PageHeader header={`${productData.name}`}/>
            <section id="product">
                <div className="container">
                    <div className="product-main-info"> 
                        <div className="product-img">
                        {/* <ProductImagesSlider images={productImages}/> */}
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
                            <SwiperSlide>
                                <Image src={Image1} alt="product"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Image2} alt="product"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Image3} alt="product"/>
                            </SwiperSlide>
                        </Swiper>
                        
                        </div>
                        <div className="product-info">
                            <div className="card-header">
                                <div className="product-sku"> Product code: {productData.code}</div>
                                <div className="product-select-features">
                                    <div className="select-f-wrapper">
                                        <button type="button" className="btn btn-compare">
                                            <Compare/>
                                        </button>
                                        <button type="button" className="btn btn-wishlist">
                                            <WishList className="wishlist"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-colors"> 
                                <div className="product-color">
                                    <p  className="color-title"> Color: </p>
                                    <div className={`color-item ${productData.color=="Silver"? 'silver': 'gray'}`}></div>

                                </div>
                            </div>
                            <div className="card-main-section">
                                <div className="price-container">
                                    <div className="product-prices">
                                        <div className="price-item">
                                            <p className="price-title"></p>
                                            <div className="price price-default"> {productData.price} AZN</div>
                                            <div className="price price-nds"> Including VAT in the amount {productData.vat} AZN </div>
                                        </div>
                                    </div>
                                    <div className="product-credits">
                                        <p className="installment">
                                            <span className="selection">installment</span>
                                        </p>
                                        <p className="installment"> from 
                                            <span className="credit-price"> {Math.round(productData.price/18)} AZN </span> 
                                        to 18 Month </p>

                                    </div>
                                </div>
                                <div className="buttons-wrapper">
                                    <button type="button" className="btn btn-base" onClick={(e)=> handleAddToCart(productData)}>
                                        <Image src={Cart} alt="add-to-cart"/>
                                        <span>Add to Cart</span>
                                    </button>
                                    <div className="card-one-click-order btn ">
                                        <div className="text-btn"> Order with 1 click </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-description">
                                <p>It is possible 
                                    <Link href="/information/kredit">
                                        <a target="_blank"> installment </a>
                                    </Link>
                                 </p>

                                <p>Free 
                                    <Link href="/information/dostavka-po-baku">
                                        <a target="_blank" > Delivery </a> 
                                    </Link>
                                in Baku</p>
                                <p> Official warranty: 12 months</p>
                                <p>
                                    <Link  href="information/taxfree" >
                                        <a target="_blank"> Tax Free </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="card-cross-sell">

                            </div>

                        </div>
                    </div> 
                </div>

            </section>

        </Layout>
    </div>
  )
}

export default Details