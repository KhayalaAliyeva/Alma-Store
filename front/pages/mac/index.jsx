import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import axios from "axios"
// companents
import Layout from '../../companents/Layout'
import Navigationn from '../../companents/Navigationn'
import CategoryTitle from '../../companents/CategoryTitle'
import CategoryList from '../../companents/CategoryList'
import CategoryListCard from '../../companents/CategoryListCard'
import ShopAbout from '../../companents/ShopAbout'



const Mac = () => {
    const[macData, setMacData]=useState([])
    useEffect(()=>{
        axios.get(` http://localhost:9000/mac-data`).then((response)=>{
            setMacData(response.data.data);
            console.log(" mac dataaaa",response.data.data)
        })
        
    
      },[])
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

        </Navigationn>
        <CategoryTitle header="Mac" text="We are ready for any job"/>
        <CategoryList>
         {
            macData.map((item, index)=>(
               
                <CategoryListCard key={index} name={item.categoryName} img={item.img} link={item.link} newIcon={item.new} promoIcon={item.promo}/>

               
            ))
         }
        </CategoryList>
        <ShopAbout title={<>
            <h2> Alma Store - Official Apple partner in Georgia with the status of Apple Premium Reseller, where you can buy Mac </h2>
            <p>Durable, multifunctional and ultimately user-friendly — these are the words you can use to describe the Apple Mac products, including laptops, PCs, and CPUs. The PCs of this US brand are the perfect choice for both creative minds and code heads. They ace any task, therefore, they will be appropriate for every desktop. Just choose the proper computer model. Visit Alma Store for a large selection and a great deal on the genuine Apple Mac products in Azerbaijan. &nbsp;</p>
        </>}>            
            <h2>Apple Mac: a brief description of computers &nbsp;</h2>
            <p>The Apple Mac lineup includes computers of different modifications and types. They differ in technical characteristics, appearance, and screen diagonal. But several important features are common for all of them:&nbsp;</p>
            <ul>
                <li>
                    <p>Retina display (providing maximum realism of the transmitted image);&nbsp;</p>
                </li>
                <li>
                    <p>FileVault system (encrypting data and keeping it confidential);&nbsp;</p>
                </li>
                <li>
                    <p>IOS operating system (facilitating device management and making it as intuitive as possible);&nbsp;</p>
                </li>
                <li>
                    <p>Apple M-Series CPU or the latest Intel Core (providing high reliability and performance of devices).&nbsp;</p>
                </li>
            </ul>
            <p>Compactness is another key common feature for the devices of the lineup. It doesn't matter what you choose: Mac Mini or iMac. Be sure that the device will take a minimum of space on your work desk allowing its efficient use.&nbsp;</p>
            <h2>The main advantages of Apple Mac technology&nbsp;</h2>
            <p>Versatility is the main advantage of Apple computers. This applies to both all-in-one computers and laptops. You can use them for entertainment, work, communication and much more. The new Mac will suit both the iOS app developer and the artist drawing custom portraits.&nbsp;</p>
            <h2>Here are other equally important advantages of computers:&nbsp;</h2>
            <ul>
                <li>
                    <p>Utmost data confidentiality and protection of the system from malicious files (no need to download additional "protective" programs, all the necessary software is already built into the system);&nbsp;</p>
                </li>
                <li>
                    <p>User-friendly design (simple and intuitive iOS design);&nbsp;</p>
                </li>
                <li>
                    <p>High performance (fast execution of the most challenging tasks by computers);&nbsp;</p>
                </li>
                <li>
                    <p>Instant synchronization with other Apple devices (extra importance for devotees of the US brand);&nbsp;</p>
                </li>
                <li>
                    <p>Environmental compliance (use of recycled materials in the production of Apple computers).&nbsp;</p>
                </li>
                </ul>
                <p>Durability is another major asset. Due to constant release of software updates, the computer stays relevant for years.&nbsp;</p>
                <h2>Features of Apple Mac products&nbsp;</h2>
                <p>The Apple Mac lineup includes 5 devices differing in technical characteristics. So, the Mac Mini is an independent compact CPU consuming a minimum of energy with the possibility of connecting any display. Mac Pro is an improved version of the Mini CPU. It is a full-fledged professional workstation. According to the manufacturer, the Apple Mac Pro is "a computer for the most ambitious projects."&nbsp;</p>
                <p>iMac is more versatile in terms of feature set and opportunities. It is a completely independent computer in no need of connecting additional components. The iMac's distinctive features include being cable- and wire-free, easily connected, and compact.&nbsp;</p>
                <p>Laptops are a separate category of the lineup, including MacBook Pro and MacBook Air. The first one is a professional laptop. It shows high performance and has advanced features. The Air laptop is equal to it in power. But it is well ahead of its "professional" competitor in terms of compactness and weight. &nbsp;</p>
                <h2>How to choose an Apple Mac?&nbsp;</h2>
                <p>There are several characteristics to consider when choosing an Apple Mac:&nbsp;</p>
                <ol start="1">
                    <li>
                    <p>Device type. The manufacturer presents independent CPUs (requiring additional display), laptops, all-in-one computers.&nbsp;</p>
                </li>
                </ol>
                <ol start="2">
                    <li>
                        <p>Screen diagonal. It is recommended to choose the devices with an enlarged display for professional work.&nbsp;</p>
                    </li>
                </ol>
                <ol start="3">
                    <li>
                        <p>Memory space. A 256 GB device will be enough for non-professional use. Choose a technique with extended memory if you plan to store large amounts of data. &nbsp;</p>
                    </li>
                </ol>
                <p>The available budget is another aspect to be considered. The expanded range of Apple computers allows you to choose a device to suit every pocket. See Alma Store catalogue for prices and to find out about the cost of Apple Mac in the modification of interest. &nbsp;</p>
                <p>Advantages of buying a Mac at Alma Store&nbsp;</p>
                <p>Alma Store is an authorised representative of the US brand in Azerbaijan. This is the reason behind:&nbsp;</p>
                <ul>
                    <li>
                        <p>Support of each device with a full-fledged guarantee;&nbsp;</p>
                    </li>
                    <li>
                        <p>Expanded Apple product range;&nbsp;</p>
                    </li>
                    <li>
                        <p>Affordable prices for Apple Mac of all modifications;&nbsp;</p>
                    </li>
                    <li>
                        <p>The sale of only genuine Apple products. &nbsp;</p>
                    </li>
                </ul>
                <p>Placing an order at Alma Store or buying equipment at our physical store (in Baku), you get the high-quality reasonably priced equipment. &nbsp;</p>
                <p>If you are in another country, you can purchase a Mac from the following APRs: Mac in Ukraine, Mac in Belarus, Mac in Kazakhstan, or Mac in Georgia.&nbsp;</p>
                <h2>FAQ&nbsp;</h2>
                <ul>
                    <li>Where can I buy a Mac officially?&nbsp;</li>
                </ul>
                <p>You can officially buy genuine computers by US brand at the Alma Store. We are the authorised representative of Apple in Azerbaijan. &nbsp;</p>
                <ul>
                    <li>What is the warranty for Apple Mac products?&nbsp;</li>
                </ul>
                <p>All devices are covered by the official warranty of the Apple manufacturer.&nbsp;</p>
                <ul>
                <li>What are the most popular Mac models in 2022?&nbsp;</li>
                </ul>
                <p>According to statistics and reviews, the MacBook Air and MacBook Pro are in the greatest demand. This can be explained by the functionality and portability of laptops. &nbsp;</p>
                <ul>
                    <li>Is it possible to buy Mac computers on credit?&nbsp;</li>
                </ul>
                <p>Sure. Here, at Alma Store, you can purchase any computer paying by instalments. Payment in instalments is available to adult buyers with an official source of income. You can apply for a credit on the website.&nbsp;</p>
        </ShopAbout>

    </Layout>

    </div>
  )
}

export default Mac