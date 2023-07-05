const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const { request, response } = require("express");
app.use(express.json());
app.use(cors());

const userDataBase = [];


const token =
  "Kg2I6BJ97nonvflIDNsxYyCamPctPN8t6OIsGzXSsOfkTdfc3PI78WuprxY0uYkgMSzpc0uvFg2PrF0ar5yHUWODiQvEi7JCYkUC";

app.post("/login", (request, response) => {
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Login success",
    token: token,
  });
});

app.get("/user-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: userDataBase,
  });
});
 const macData=[
  {
    categoryName:"MacBook Pro",
    link:"/mac/macbook-pro",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15001/macbook_pro_16-in_space_gray_pure_front_print__usen-1.jpeg@webp",
    new:"show",
    promo:"show",
  },
  {
    categoryName:"MacBook Air",
    link:"/mac/macbook-air",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15002/macbook_air_gold_with_m1_chip_2-up_print__usen.webp@webp",
    new:"show",
    promo:"",
  },
  {
    categoryName:"iMac",
    link:"/mac/imac",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15003/1.webp@webp",
    new:"",
    promo:"show",
  },
  {
    categoryName:"Mac Pro",
    link:"/mac/mac-pro",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15004/macpr.webp@webp",
    new:"",
    promo:"",
  },
  {
    categoryName:"Mac Mini",
    link:"/mac/mac-mini",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15005/amm_new_1.webp@webp",
    new:"",
    promo:"",
  },
  {
    categoryName:"Mac Studio",
    link:"/mac/mac-studio",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15006/download-1.jpeg@webp",
    new:"",
    promo:"",
  },
  {
    categoryName:"Services for Mac",
    link:"/mac/services-for-mac",
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/92/15007/0.jpg@webp",
    new:"",
    promo:"",
  }
 ];
 app.get("/mac-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macData,
  });
});

const macBookPro=[
  {
    id:1,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073859697430/211129190011280732.jpg@webp",
    name:'MacBook Pro 14.2"  Apple M1 Pro (8C CPU/14C GPU), 16 GB, 512 GB, Space Gray ',
    code:"MKGP3RU/A",
    price:4799,
    vat:732,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:2,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211025063233144651/211129190011280732.jpg@webp",
    name:'MacBook Pro 14.2"  Apple M1 Pro (8C CPU/14C GPU), 32 GB, 512 GB, Space Gray ',
    code:"Z15G000CK",
    price:5700,
    vat:869,
    cpu:"Apple M1 Pro",
    new:"",
    promo:"",
    exclusive:"",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:3,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220120121036771159/220314150013986166.jpg@webp",
    name:'MacBook Pro 14.2"  Apple M1 Pro (10C CPU/14C GPU), 16 GB, 2 TB, Silver ',
    code:"Z15J000CQ ",
    price:6300,
    prevPrice:6650,
    vat:961,
    new:"",
    promo:"show",
    exclusive:"show",
    cpu:"Apple M1 Pro",
    color:"Silver",
    capacity:"2 TB",
    diagonal:'14.2"',
    
  },
  {
    id:4,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073900720095/211129190021888943.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Pro (8C CPU/14C GPU), 16 GB, 512 GB, Silver ',
    code:"MKGR3RU/A  ",
    price:4799,
    vat:732,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Silver",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:5,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073901240894/211129190021888943.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 1 TB, Silver ',
    code:"MKGT3RU/A ",
    price:6059,
    vat:924,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Silver",
    capacity:"1 TB",
    diagonal:'14.2"',
  },
  {
    id:6,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211022103045059800/211129190011280732.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Pro (8C CPU/14C GPU), 16 GB, 512 GB, Space Gray ',
    code:"Z15G000DY ",
    price:4820,
    vat:735,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:7,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220607122425983357/220831140014355956.jpg@webp",
    name:' MacBook Pro 13"  Apple M2 (8C CPU/10C GPU), 8 GB, 256 GB, Space Gray ',
    code:"MNEH3RU/A  ",
    price:3199,
    vat:488,
    new:"show",
    promo:"",
    exclusive:"",
    cpu:"Apple M2",
    color:"Space Gray",
    capacity:"256 GB",
    diagonal:'13"',
  },
  {
    id:8,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220607122439330551/220831140014355956.jpg@webp",
    name:' MacBook Pro 13"  Apple M2 (8C CPU/10C GPU), 8 GB, 512 GB, Space Gray ',
    code:"MNEJ3RU/A ",
    price:3699,
    vat:564,
    new:"show",
    promo:"",
    exclusive:"",
    cpu:"Apple M2",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'13"',
  },
  {
    id:9,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220607122425983357/220831140014355956.jpg@webp",
    name:' MacBook Pro 13"  Apple M2 (8C CPU/10C GPU), 8 GB, 256 GB, Silver ',
    code:"MNEP3RU/A  ",
    price:3199,
    vat:488,
    new:"show",
    promo:"",
    exclusive:"",
    cpu:"Apple M2",
    color:"Silver",
    capacity:"256 GB",
    diagonal:'13"',
  },
  {
    id:10,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220607122439330551/220831140014355956.jpg@webp",
    name:'  MacBook Pro 13"  Apple M2 (8C CPU/10C GPU), 8 GB, 512 GB, Silver  ',
    code:"MNEQ3RU/A ",
    price:3699,
    vat:564,
    new:"show",
    promo:"",
    exclusive:"",
    cpu:"Apple M2",
    color:"Silver",
    capacity:"512 GB",
    diagonal:'13"',
  },
  {
    id:11,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073856638756/211129170021216691.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 512 GB, Space Gray ',
    code:"MK183RU/A ",
    price:6059,
    vat:924,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'16.2"',
  },
  {
    id:12,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073858166164/211129170027166620.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 512 GB, Silver ',
    code:"MK1E3RU/A ",
    price:6059,
    vat:924,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Silver",
    capacity:"512 GB",
    diagonal:'16.2"',
  },
  {
    id:13,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211022103041984836/211129170021216691.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 32 GB, 512 GB, Space Gray ',
    code:"Z14V0008D ",
    price:6900,
    vat:1053,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'16.2"',
  },
  {
    id:14,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/201116141428702287/201210170013462562.jpg@webp",
    name:' MacBook Pro 13" with Touch Bar Apple M1 (8C CPU/8C GPU), 16 GB, 512 GB, Space Gray ',
    code:"Z11C000Z3",
    price:4069,
    vat:621,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 ",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'13"',
  },
  {
    id:15,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/201123124331042150/201210170013462562.jpg@webp",
    name:' MacBook Pro 13" with Touch Bar Apple M1 (8C CPU/8C GPU), 16 GB, 1 TB, Space Gray  ',
    code:"Z11C00030",
    price:4530,
    vat:691,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 only ",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'13"',
    
  },
  {
    id:16,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/201130124420367483/201210170014994179.jpg@webp",
    name:' MacBook Pro 13" with Touch Bar Apple M1 (8C CPU/8C GPU), 16 GB, 512 GB, Silver ',
    code:" Z11F0002Z ",
    price:4065,
    vat:620,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 only",
    color:"Silver",
    capacity:"512 GB",
    diagonal:'13"',
  },
  {
    id:17,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/201210065607401779/201210170022896162.jpg@webp",
    name:'  MacBook Pro 13" with Touch Bar Apple M1 (8C CPU/8C GPU), 8 GB, 1 TB, Space Gray  ',
    code:"Z11C0002V",
    price:4069,
    vat:621,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 only",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'13"',
  },
  {
    id:18,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073857146778/211129170021216691.jpg@webp",
    name:'   MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 1 TB, Space Gray  ',
    code:" MK193RU/A ",
    price:6539,
    vat:997,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:19,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073857654718/211129170021216691.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Max (10C CPU/32C GPU), 32 GB, 1 TB, Space Gray',
    code:" MK1A3RU/A ",
    price:8469,
    vat:1292,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Max",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:20,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073858675390/211129170027166620.jpg@webp",
    name:'  MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 1 TB, Silver ',
    code:" MK1F3RU/A ",
    price:6539,
    vat:997,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Silver",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:21,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073859186112/211129170027166620.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Max (10C CPU/32C GPU), 32 GB, 1 TB, Silver ',
    code:" MK1H3RU/A ",
    price:8469,
    vat:1292,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Max",
    color:"Silver",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:22,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211019073900207302/211129190011280732.jpg@webp",
    name:'  MacBook Pro 14.2"  Apple M1 Pro (10C CPU/16C GPU), 16 GB, 1 TB, Space Gray ',
    code:"MKGQ3RU/A",
    price:6059,
    vat:924,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'14.2"',
  },
  {
    id:23,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211022103044032253/211129170021216691.jpg@webp",
    name:'  MacBook Pro 16.2"  Apple M1 Pro (10C CPU/16C GPU), 32 GB, 1 TB, Space Gray ',
    code:"Z14V0008J",
    price:7360,
    vat:1123,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:24,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211022103045573599/211129190011280732.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Max (10C CPU/24C GPU), 32 GB, 512 GB, Space Gray ',
    code:" Z15G000CP ",
    price:6900,
    vat:1053,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Max",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:25,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211101070228666455/211129190011280732.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Pro (10C CPU/16C GPU), 32 GB, 512 GB, Space Gray ',
    code:"Z15G000D4",
    price:6420,
    vat:979,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"512 GB",
    diagonal:'14.2"',
  },
  {
    id:26,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211101070229699693/211129190011280732.jpg@webp",
    name:' MacBook Pro 14.2"  Apple M1 Pro (10C CPU/16C GPU), 32 GB, 1 TB, Space Gray ',
    code:"Z15G000D6",
    price:6890,
    vat:1051,
    new:"",
    promo:"",
    exclusive:"",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"1 TB",
    diagonal:'14.2"',
  },
  {
    id:27,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211101070239364360/211129170027166620.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Max (10C CPU/32C GPU), 64 GB, 1 TB, Silver  ',
    code:"Z14Y0008Z ",
    price:9240,
    vat:1409,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 Max",
    color:"Silver",
    capacity:"1 TB",
    diagonal:'16.2"',
  },
  {
    id:28,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211101070239875123/211129170021216691.jpg@webp",
    name:'  MacBook Pro 16.2"  Apple M1 Max (10C CPU/32C GPU), 64 GB, 2 TB, Space Gray  ',
    code:"Z14V0008T",
    price:10190,
    vat:1554,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 Max",
    color:"Space Gray",
    capacity:"2 TB",
    diagonal:'16.2"',
  },
  {
    id:29,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/211101070240900386/211129170021216691.jpg@webp",
    name:' MacBook Pro 16.2"  Apple M1 Max (10C CPU/32C GPU), 64 GB, 4 TB, Space Gray ',
    code:"Z14V0008Y",
    price:11600,
    vat:1769,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 Max",
    color:"Space Gray",
    capacity:"4 TB",
    diagonal:'16.2"',
  },
  {
    id:30,
    img:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220120121036244942/220314150020641478.jpg@webp",
    name:'  MacBook Pro 14.2"  Apple M1 Pro (10C CPU/14C GPU), 16 GB, 2 TB, Space Gray ',
    code:" Z15G000CY ",
    price:6650,
    vat:1014,
    new:"",
    promo:"",
    exclusive:"show",
    cpu:"Apple M1 Pro",
    color:"Space Gray",
    capacity:"2 TB",
    diagonal:'14.2"',
  },
]

app.post("/add-product", (request, response) => {
  macBookPro.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});
app.get("/macbook-pro-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro,
  });
});

//deatils pages
app.get("/macbook-pro/1", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[0],
  });
});
app.get("/macbook-pro/2", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[1],
  });
});
app.get("/macbook-pro/3", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[2],
  });
});
app.get("/macbook-pro/4", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[3],
  });
});
app.get("/macbook-pro/5", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[4],
  });
});
app.get("/macbook-pro/6", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[5],
  });
});
app.get("/macbook-pro/7", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[6],
  });
});
app.get("/macbook-pro/8", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[7],
  });
});
app.get("/macbook-pro/9", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[8],
  });
});
app.get("/macbook-pro/10", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[9],
  });
});
app.get("/macbook-pro/11", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[10],
  });
});
app.get("/macbook-pro/12", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[11],
  });
});
app.get("/macbook-pro/13", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[12],
  });
});
app.get("/macbook-pro/14", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[13],
  });
});
app.get("/macbook-pro/15", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[14],
  });
});
app.get("/macbook-pro/16", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[15],
  });
});
app.get("/macbook-pro/17", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[16],
  });
});
app.get("/macbook-pro/18", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[17],
  });
});
app.get("/macbook-pro/19", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[18],
  });
});
app.get("/macbook-pro/20", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[19],
  });
});
app.get("/macbook-pro/21", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[20],
  });
});
app.get("/macbook-pro/22", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[21],
  });
});
app.get("/macbook-pro/23", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[22],
  });
});
app.get("/macbook-pro/24", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[23],
  });
});
app.get("/macbook-pro/25", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[24],
  });
});
app.get("/macbook-pro/26", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[25],
  });
});
app.get("/macbook-pro/27", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[26],
  });
});
app.get("/macbook-pro/28", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[27],
  });
});
app.get("/macbook-pro/29", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[28],
  });
});
app.get("/macbook-pro/30", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: macBookPro[29],
  });
});
const orders=[];
app.post("/add-order", (request, response) => {
  orders.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});
app.get("/orders", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: orders,
  });
});




const addToCartItems=[];

app.post("/add-to-cart-data", (request, response) => {
  addToCartItems.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});
app.get("/cart-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: addToCartItems,
  });
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});
