import React,{useEffect, useState, useContext} from 'react'
import axios from "axios"
import Link from 'next/link'
import swal from 'sweetalert'

// companents
import Layout from '../../../companents/Layout'
import Navigationn from '../../../companents/Navigationn'
import PageHeader from '../../../companents/PageHeader'
import CatalogListItem from '../../../companents/CatalogListItem'
import Filters from '../../../companents/Filters'
import ShopAbout from "../../../companents/ShopAbout"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownShortWide} from '@fortawesome/free-solid-svg-icons'
import {faArrowUpShortWide} from '@fortawesome/free-solid-svg-icons'


import { useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../../../features/productsApi'
import { addToCart } from '../../../features/cartSlice'

import{ ToastContainer} from "react-toastify"

const MacbookPro = () => {
  
  const {data, error, isLoading}=useGetAllProductsQuery();
  // console.log("datdata", data)
  // let macData=data.data;
  const dispatch=useDispatch();
  const[macBookProData, setMacBookProData]=useState([]);
  // Sortby price
  const[sort, setSort]=useState("");
  const[icon, setIcon]= useState(<FontAwesomeIcon icon={faArrowDownShortWide} />)
  // addto cart button
  const [hideAddToCart, setHideAddToCart]=useState("");
  const [showGoToCart, setShowGoToCart]= useState("");



  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
    swal({
      title: "The product has been added to your cart!",
      icon: "success",
      button: "Ok",
    });
    // setHideAddToCart("hideAddToCart");
    // setShowGoToCart("showGoToCart");

  }


    useEffect(()=>{
        axios.get(` http://localhost:9000/macbook-pro-data`).then((response)=>{
          setMacBookProData(response.data.data);
            // console.log(" mac dataaaa",response.data.data)
        })
      },[]);
      const sortIncreace=()=>{
        macBookProData.sort((a, b) => {
          return a.price - b.price;
      });
    }
      const sortDecreace=()=>{
        macBookProData.sort((a, b) => {
          return b.price - a.price;
      });
    }
      const sortClick=()=>{
        if(sort==""||sort=="dec"){      
          setSort("inc");
          setIcon(<FontAwesomeIcon icon={faArrowUpShortWide} />);
          sortDecreace();
        }
        if(sort=="inc"){
          
          setSort("dec");
          setIcon(<FontAwesomeIcon icon={faArrowDownShortWide} />);
          sortIncreace();
        }
      }
      const fromPrice=(value)=>{
        if(value){
          const newData=macBookProData.filter(
            (item)=>{
              if(item.price>=value){
                return item;
              }
            }
          )
          setMacBookProData(newData);
        }
      }
      const tillPrice=(value)=>{
        if(value){
          const newData=macBookProData.filter(
            (item)=>{
              if(item.price<=value){
                return item;
              }
            }
            
          )
          setMacBookProData(newData);
        }
      }
      const filterCPU=(value)=>{
          const newData=macBookProData.filter(
            (item)=>{
              if (item.cpu.trim().includes(value.trim())){
                
                return item;
              }
              
              
            }
            
          )
          setMacBookProData(newData);
        
      }
      const filterColor=(value)=>{
        const newData=macBookProData.filter(
          (item)=>{
            if (item.color.trim().includes(value.trim())){
              
              return item;
            }
            
            
          }
          
        )
        setMacBookProData(newData);
      
    }
    const filterCapacity=(value)=>{
      const newData=macBookProData.filter(
        (item)=>{
          if (item.capacity.trim().includes(value.trim())){
            
            return item;
          }
          
          
        }
        
      )
      setMacBookProData(newData);
    
  }
  const filterDiagonal=(value)=>{
    const newData=macBookProData.filter(
      (item)=>{
        if (item.diagonal.trim().includes(value.trim())){
          
          return item;
        }
        
        
      }
      
    )
    setMacBookProData(newData);
  
}
    
      console.log("datd data", macBookProData )
  return (
    <div>
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
        
      </Navigationn>
      <PageHeader header="MacBook Pro"/>
      <section id="catalog-subcategory">
        <div className="container">
          <div className="total-content">
            {/* <Filters/> */}
            <div className="filters">
              <div className="page-sidenav">
                <p className="sidenav-title"> Select MacBook Pro</p>
                <div className="filters-scroll">
                  <div className="ps">
                    <div className="ps-content">
                      <div  className="filter-item">
                        <p className="name"> Price, AZN: </p>
                        <div className="input-group">
                          <input type="number" aria-label="filterPriceFrom" className="form-control" placeholder="From" onChange={(e)=>fromPrice(e.target.value)}/>
                          <input type="number" aria-label="filterPriceTo" className="form-control" placeholder="Till" onChange={(e)=>tillPrice(e.target.value)}/>
                        </div>
                        <div className="mat-checkbox">
                          <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                            <div className="mat-checkbox-inner-container">
                              <input type="checkbox" className="mat-checkbox-input" id="mat-checkbox-1-input"  />
                              
                              </div>
                            {/* </div> */}
                            <span className="mat-checkbox-label">
                              Only discounted products 
                            </span>

                          </label>
                        </div>
                    
                      </div>
                      <div className="filter-item">
                        <p  className="name"> CPU</p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCPU("Apple M1 only")} /> 
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name"> Apple M1 </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input " onChange={()=>filterCPU("Apple M1 Max")}/>
                                        
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">  Apple M1 Max  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input " onChange={()=>filterCPU("Apple M1 Pro")}/>
                                        
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">  Apple M1 Pro </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCPU("Apple M2")}/>
                                        
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name"> Apple M2 </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  className="name">   External Colour </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                      <input type="checkbox" className="mat-checkbox-input " onChange={()=>filterColor("Silver")} />
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div className="filter-color silver"></div>
                                        <div  className="filter-name">  Silver  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                            
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input " onChange={()=>filterColor("Space Gray")} />
                                      
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div className="filter-color gray"></div>
                                        <div  className="filter-name">   Space Gray   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  className="name">   Storage Capacity  </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCapacity("1 TB")}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">  1 TB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCapacity("2 TB")}/>
                                        
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">   2 TB   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCapacity("256 GB")}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                      <div  className="filter-name">   256 GB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCapacity("4 TB")}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">   4 TB   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterCapacity("512 GB")}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">   512 GB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  className="name">  Diagonal Length </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input " onChange={()=>filterDiagonal('13" ')}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name"> {` 13" `} </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterDiagonal('14.2" ')}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">  {` 14.2" `}  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input" onChange={()=>filterDiagonal('16.2" ')}/>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div  className="filter-name">  {` 16.2" `} </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      

                    </div>

                  </div>
                
                </div>
              </div>
            </div>
           
            {isLoading?(<p>Loading</p>): error ?(<p>An error occured...</p>)
            :(
              <div className="catalog-list-wrapper">
              <div className="catalog-list-header">
                <div className="list-option order">
                  <p onClick={sortClick}>Sort by:
                    <span className="order-type">By price</span>
                    <i className="sort-icon">{icon}</i>
                  </p>
                </div>
              </div>
              <div className="catalog-list">
                {
                  macBookProData.map((item, index)=>(

                      <CatalogListItem 
                        key={index} 
                        id={item.id}
                        name={item.name} 
                        code={item.code} 
                        img={item.img} 
                        price={item.price} 
                        vat={item.vat} 
                        prevPrice={item.prevPrice}
                        productInfo={item} 
                        newIcon={item.new}
                        promoIcon={item.promo}
                        exclusiveIcon={item.exclusive}
                        onclick={(e)=> handleAddToCart(item)}
                        showGoToCart={showGoToCart}
                        hideAddToCart={hideAddToCart}
                        
                        />
                    
                  ))
                }
                
              </div>

            </div>

            )
            }
          </div>

        </div>


      </section>
      <ShopAbout title={<>
        <h2> Alma Store - Official Apple partner in Georgia with the status of Apple Premium Reseller, where you can buy MacBook Pro</h2>
        <p>The Alma Store online store offers Azerbaijani residents to buy a MacBook Pro at the best price in the country. A functional laptop from the American brand will be relevant for both professional designers, video makers, and ordinary users. Thanks to its characteristics, the MacBook Pro quickly copes with tasks of any type and limits its owner from freezing, fast battery drain.&nbsp;</p>
      </>}>
        <h2>Macbook&nbsp;Pro: description, differences, features</h2>
        <p>Introduced by&nbsp;Apple&nbsp;MacBook&nbsp;Pro&nbsp;is a functional laptop with high performance, elegant appearance, compact size. Today, devices are available in two versions: with a screen diagonal of 13” (inch) and 16” (inch). Features&nbsp;MacBook&nbsp;Pro&nbsp;are:</p>
        <ul>
          <li>Streamline body;</li>
          <li>Trackpad&nbsp;Force&nbsp;Touch;</li>
          <li>Retina&nbsp;display;</li>
          <li>Touch&nbsp;Bar;</li>
          <li>Sensitive touch detection and more</li>
        </ul>
        <p>Also&nbsp;Macbook&nbsp;Pro is characterized by the brightest color reproduction, the maximum viewing angle (178 degrees), and the presence of LED backlighting. This makes&nbsp;device&nbsp;ideal for graphic work, video processing and just entertainment.</p>
        <h2>Specifications&nbsp;MacBook&nbsp;Pro</h2>
        <p>Relevant to buy&nbsp;Macbook&nbsp;Pro in Azerbaijan will be both for graphic specialists and game lovers. The device effectively copes with tasks of various types:</p>
        <ul>
          <li>Creating designs;</li>
          <li>Photo manipulation;</li>
          <li>Mounting video clips;</li>
          <li>Audio track handling;</li>
          <li>Video chat;</li>
          <li>Finding information, etc.</li>
        </ul>
        <p>MacBook&nbsp;Pro's enhanced functionality is due to its features. The manufacturer&nbsp;Apple&nbsp;did everything to ensure that the device was as productive as possible, but at the same time compact and convenient.</p>
        <h2>CPU and Memory</h2>
        <p>Technical specifications of the multifunctional laptop with a touch bar depend on its modification. For a device with a screen diagonal of 13 inches, the &nbsp;Intel Core i5 2.7 processor (8 GB RAM, 2 cores) is typical, for a device with a 16-inch display — Intel Core i7 (RAM increased to 16 GB, the number of cores — up to 4).</p>
        <p>Modification also affects memory size. The 13-inch MacBook Pro is available in three versions: 128, 256 and 512 GB, and the 16-inch in two — 256 and 512 GB. The modification should be selected taking into account the features of the intended operation of the device. To perform everyday tasks (watching videos, processing personal photos, communication), a 128 GB model will be more relevant. For professional use, you should order a device with the maximum amount of memory. At the same time, it is worth remembering that the cost of MacBook Pro &nbsp;(devices with 128 GB are considered the most affordable) depends on this characteristic.</p>
        <h2>Design</h2>
        <p>Consistent with its traditions, the American manufacturer has endowed the new&nbsp;MacBook&nbsp;Pro&nbsp;M1 2020 with a concise and practical design. The body of the device is made of solid aluminum (UniBody). It looks elegant, original and even elegant. Key External Features&nbsp;Device&nbsp;— lightness, compactness and maximum protection from negative external influences.</p>
        <h2>Display</h2>
        <p>After numerous reviews, tech experts found that MacBook Pro has one of the best screens. It is also made using Retina technology. The difference lies in the extended color gamut and increased brightness, which contributes to the most accurate reproduction of colors. Another feature that users often mention in reviews is — the presence of anti-reflective coating. It allows you to continue working even under conditions of increased brightness of external light.</p>
        <h2>Standalone</h2>
        <p>Macbook Pro is equipped with a Lithium Polymer battery that lasts 8-9 hours when performing standard tasks. With increased loads, this time is reduced to 5-6 hours.&nbsp;</p>
        <h2>Audio</h2>
        <p>The sound in the updated version of&nbsp;MacBook&nbsp;Pro&nbsp;has undergone a number of changes and has become richer, bassier. Equipped with a 3.5mm audio jack.</p>
        <h2>Lineup&nbsp;MacBook&nbsp;Pro</h2>
        <p>In Almastor presented Apple MacBook Pro you can buy in several versions. The lineup includes devices with a diagonal of 13 and 16 inches with a memory capacity of 128 to 512 GB. The &nbsp;devices differ not only in the dimensions of the display, but also in the technical characteristics.</p>
        <h2>How to Choose the Right Laptop&nbsp;MacBook&nbsp;Pro</h2>
        <p>Choosing an&nbsp;Apple&nbsp;laptop should be based on one characteristic: usage. If you are purchasing a device for domestic use (watching videos, chatting, playing games, reading), then it is better to give preference to more budget options with a small screen. Their performance is quite enough to perform standard functions. At the same time, such&nbsp;devices&nbsp;will significantly save the budget.</p>
        <p>For professional use, it is better to buy a MacBook Pro in the maximum configuration: with a diagonal of 16” and a memory capacity of 512 GB. Such a device can easily cope even with work of increased complexity (up to program development) and will provide the ability to quickly complete work tasks.&nbsp;</p>
        <h2>Purchase Benefits&nbsp;MacBook&nbsp;Pro&nbsp;Alma Store</h2>
        <p>At Almastore you can buy a MacBook Pro at the best price in Azerbaijan. This is explained by the direct cooperation of our store with the American manufacturer.&nbsp;</p>
        <p>By contacting us, you are saving yourself:</p>
        <ul>
          <li>Budget (prices for&nbsp;MacBook&nbsp;Pro&nbsp;set at a favorable level, payment in installments is available for adults);</li>
          <li>Time (you can place an order on the website);</li>
          <li>Sil (if necessary, the store manager will compare several models and help you choose the right device).</li>
        </ul>
        <p>You can contact the manager to clarify your questions through the feedback form. You can get the details of buying equipment by installments (credit) in the corresponding section of the site. If you are from another country, you can purchase a MacBook Pro from Apple Premium Reseller here: <a href="https://ion.ua/mac/macbook-pro">MacBook Pro M2</a> in Ukraine.</p>
        <h2>Apple MacBook Pro FAQ</h2>
        <h3>✅ How much does it cost to buy a MacBook Pro in Azerbaijan❓</h3>
        <p>The price at which you can&nbsp;MacBook&nbsp;Pro&nbsp;buy in Baku depends on the device model and current discounts. You can check the current price in the catalog.</p>
        <h3>⭐ What is the Macbook Pro warranty❓</h3>
        <p>Macbook&nbsp;Pro comes with a full warranty. It provides the ability to service the device in Apple authorized service centers.</p>
        <h3>⚡ What are the most popular Macbook Pros in 2022❓</h3>
        <p>The 13-inch display with 256 GB of storage is the most popular. This can be explained by its versatility and affordability. New 14.2-inch and 16.2-inch MacBook Pro models with Apple M1 Max and Apple M1 Pro processors were released in 2021.</p>
        <h3>⏩ What is the price of a MacBook Pro Retina❓</h3>
        <p>Price of original Apple laptops starts from 3220 AZN. You can check the price in the catalog.</p>
      </ShopAbout>
      </Layout>
    </div>
  )
}
export default MacbookPro
  