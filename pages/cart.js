import React,{useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Layout from '../companents/Layout';
import Navigationn from '../companents/Navigationn';
import PageHeader from '../companents/PageHeader';
import swal from 'sweetalert'
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

// svg
import { Delete } from '../public/svg';

// tabs
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { addToCart, decreaseCart, getTotal, removeFromCart } from '../features/cartSlice';

// tab2 form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";
import _ from "../companents/@lodash/index";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
   
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

//tab2 form
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required field"),
      email: yup.string().email("Invalid email format").required("Required field"),
    phone: yup
      .string()
      .required("Required field")
      .matches(
        /^((\+)?994(\s)?)?(5[015]|7[07]|99|10|60)(\s)?([0-9]{3})(\s)?([0-9]{2})(\s)?([0-9]{2})$/,
        "Please enter your number in the correct format!"
      ),
  });
  
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
  };



const CartScreen = () => {
    // const [product,setProduct]=useState([]);
    const[disabled1, setDisabled1]= useState(false);
    const[disabled2, setDisabled2]= useState(true);
    const[disabled3, setDisabled3]= useState(true);
    const [value, setValue] = React.useState(0);

    const cart=useSelector(state=> state.cart);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTotal());
    },[cart, dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem));
  }
  const handleDecreaseCart=(cartItem)=>{
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseCart=(cartItem)=>{
    dispatch(addToCart(cartItem));
  }
  const tab1Submit=()=>{
    setDisabled2(false)
  }
  const orderProduct=()=>{
    setDisabled3(false);
    setDisabled2(true);
    setDisabled1(true);
    axios.post(`http://localhost:9000/add-order`,cart.cartItems).then((response)=>{
        if(response.status===201){
            swal({
                title: "Congratulations!",
                text: "Your order has been successfully received!",
                icon: "success",
                button: "OK!",
              });
          window.location.reload(true);
          console.log(cart);  
        }
      })
  }

  //tab2 form
  const { control, formState, handleSubmit, watch, register } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });
  const { isValid, dirtyFields, errors, setError } = formState;

  function onSubmit({ name, email, phone }) {
    console.log(name, email, "+994" + phone);
  }

  return (
    <Layout>
        <Navigationn></Navigationn>
        <PageHeader header="My Cart"/>
        {
           cart.cartItems.length=== 0 ?
            (<section id="empty-cart">
                <div className="container">
                    <p  className="title">Your cart is empty</p>
                    <Link href="/">
                        <a>
                            Continue shopping
                        </a>
                    </Link>
                </div>
            </section>) :
            (
                <section id="checkout-tabs">
                    <div className="container">
                        <div className="tab-group-wrapper">
                            <Box className="tab-group">
                                <Box className="tab-header">
                                    <Tabs
                                        className='tab-label-container'
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable force tabs example"
                                        // centered
                                    >
                                        <Tab 
                                            label={ <div className="tab-label">
                                                <div className="cart-step">1</div>
                                                <div className="cart-step-title "> Products and Costumer assistance </div>
                                                </div>} 
                                        {...a11yProps(0)} 
                                        className="tab-label-content"
                                        disabled={disabled1}

                                        />
                                    
                                        <Tab 
                                            label={ <div className="tab-label">
                                                <div className="cart-step">2</div>
                                                <div className="cart-step-title ">  Delivery and Payment Method  </div>
                                                </div>}
                                        {...a11yProps(1)} 
                                            className="tab-label-content"
                                            disabled={disabled2}
                                        />
                                        
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                <div className="cart-product-list">
                                    {
                                    cart.cartItems?.map((item)=>(
                                            <div className="cart-product-item" key={item.id}>
                                                <div className="product-about">
                                                    <figure className="product-img">
                                                        <picture>
                                                            <source srcSet={item.img} type="image/webp" />
                                                            <img src={item.img} alt="model" />
                                                         </picture>
                                                    </figure>
                                                    <div className="product-description">
                                                        <p className="product-name">{item.name}</p>
                                                        <p  className="product-sku"> Product code: {item.code}</p>
                                                    </div>
                                                </div>
                                                <div className="product-quantity">
                                                    <p className="label"> Quantity: </p>
                                                    <div className="input-group">
                                                        <div  className="input-group-prepend">
                                                            <button  type="button" className="btn btn-light" onClick={()=>handleDecreaseCart(item)}>- </button>
                                                        </div>
                                                        
                                                        <div className="form-control">{item.cartQuantity}</div>
                                                        <div  className="input-group-append">
                                                            <button  type="button" className="btn btn-light" onClick={()=>handleIncreaseCart(item)}>+ </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="product-prices">
                                                    <div  className="prices-inner">
                                                        <p  className="label"> Prices:: </p>
                                                        <div className="prices-wrapper">
                                                            <div className="price price-default price-default-am"> 
                                                            {item.price*item.cartQuantity} AZN

                                                            </div>
                                                            <div className="price-nds "> Including VAT in the amount  
                                                            {item.vat*item.cartQuantity} AZN 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button type="button" className="btn btn-delete" onClick={()=>handleRemoveFromCart(item)}>
                                                    <Delete/>
                                                </button>
                                        
                                            </div>
                                            
                                            
                                        ))
                                    }
                                    


                                </div>
                                <div className="cart-products-total">
                                    <div className="price-content">
                                        <div className="total-price">
                                            <div className="line product">
                                                <div  className="text"> Products </div>
                                                <div  className="cost">
                                                    <span className="text">{cart.cartTotalAmount} AZN</span>
                                                </div>
                                            </div>
                                            <div className="line entry-btn">
                                                <div  className="text"> Enter promo code </div>
                                            </div>
                                            {/* input promo code */}
                                            <div  className="divider"></div>
                                            <div  className="line total">
                                                <div className="text"> Total cost </div>
                                                <div className="cost">
                                                    <div> {cart.cartTotalAmount} AZN</div>
                                                    <div className="price-nds "> Including VAT in the amount {cart.cartTotalVat}  AZN </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>

                                </div>
                                <div className="divider"></div>
                                <div className="cart-bottom">
                                    <div className="login-text">
                                     <p>
                                        We recommend logging in 
                                        <span className="sign-in-btn"> My Cart </span>
                                        or
                                        <span className="sign-in-btn"> Sign up </span>
                                     </p>

                                    </div>
                                    <div className="submit-button">
                                        <button className="btn btn-brand-blue" onClick={tab1Submit}> Submit order </button>
                                    </div>
                                </div>
                                    
                                    
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className="second-tab">
                                        <div className="second-tab-top">
                                            <p className="login-text">
                                                We recommend logging in 
                                                <span className="sign-in-btn"> My Cart </span>
                                                or
                                                <span className="sign-in-btn"> Sign up </span>
                                            </p>
                                        </div>
                                        <div className="checkout-user-info">
                                            <div className="info-form">
                                                <p className="f-title"> Customer </p>
                                                <form
                                                    name="registerForm"
                                                    noValidate
                                                    className="flex flex-col justify-center w-full mt-32"
                                                    onSubmit={handleSubmit(onSubmit)}
                                                >
                                                    <Controller
                                                    name="name"
                                                    control={control}
                                                    className="controller"
                                                    render={({ field }) => (
                                                        <TextField
                                                        {...field}
                                                        className="mb-24"
                                                        id="standard-start-adornment"
                                                        label="Name"
                                                        type="name"
                                                        error={!!errors.name}
                                                        helperText={errors?.name?.message}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        margin="dense"
                                                        />
                                                    )}
                                                    />
                                                    <Controller
                                                    name="phone"
                                                    control={control}
                                                    className="controller"
                                                    render={({ field }) => (
                                                        <TextField
                                                        {...field}
                                                        className="mb-24"
                                                        id="standard-start-adornment"
                                                        InputProps={{
                                                            startAdornment: (
                                                            <InputAdornment position="start">+994</InputAdornment>
                                                            ),
                                                        }}
                                                        label="Mobil Nomre"
                                                        type="name"
                                                        error={!!errors.phone}
                                                        helperText={errors?.phone?.message}
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        margin="dense"
                                                        onInput={(e) => {
                                                            // eslint-disable-next-line radix
                                                            e.target.value = Math.max(0, e.target.value)
                                                            .toString()
                                                            .slice(0, 9);
                                                        }}
                                                        />
                                                    )}
                                                    />

                                                    <Controller
                                                        name="email"
                                                        control={control}
                                                        className="controller"
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
                                                            fullWidth
                                                            margin="dense"
                                                            
                                                            />
                                                        )}
                                                    />
                                                    <TextField
                                                        label="Comment"
                                                        type="text"
                                                        size="large"
                                                        fullWidth
                                                        margin="dense"
                                                    />

                                                    
                                                </form>
                                            </div>
                                            <div className="info-left">
                                                <div className="checkout-products-header">
                                                    <div  className="cart-info">
                                                        <p className="f-title"> Ordered </p>
                                                        <p  className="products-count"> Products in the cart {cart.cartTotalQuantity}</p>
                                                    </div>
                                                    <p  className="back-link"> Return to the list of products </p>                                                   
                                                </div>
                                                <div className="cart-product-list">
                                                    {
                                                    cart.cartItems?.map((item)=>(
                                                            <div className="cart-product-item" key={item.id}>
                                                                <div className="product-about">
                                                                    <figure className="product-img">
                                                                        <picture>
                                                                            <source srcSet={item.img} type="image/webp" />
                                                                            <img src={item.img} alt="model" />
                                                                        </picture>
                                                                    </figure>
                                                                    <div className="product-description">
                                                                        <p className="product-name">{item.name}</p>
                                                                        <p  className="product-sku"> Product code: {item.code}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="product-quantity">
                                                                    <p className="label"> Quantity: </p>
                                                                    <div className="input-group">
                                                                        <div  className="input-group-prepend">
                                                                            <button  type="button" className="btn btn-light" onClick={()=>handleDecreaseCart(item)}>- </button>
                                                                        </div>
                                                                        
                                                                        <div className="form-control">{item.cartQuantity}</div>
                                                                        <div  className="input-group-append">
                                                                            <button  type="button" className="btn btn-light" onClick={()=>handleIncreaseCart(item)}>+ </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div  className="product-prices">
                                                                    <div  className="prices-inner">
                                                                        <p  className="label"> Prices:: </p>
                                                                        <div className="prices-wrapper">
                                                                            <div className="price price-default price-default-am"> 
                                                                            {item.price*item.cartQuantity} AZN

                                                                            </div>
                                                                            <div className="price-nds "> Including VAT in the amount  
                                                                            {item.vat*item.cartQuantity} AZN 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <button type="button" className="btn btn-delete" onClick={()=>handleRemoveFromCart(item)}>
                                                                    <Delete/>
                                                                </button>
                                                        
                                                            </div>
                                                            
                                                            
                                                        ))
                                                    }
                                                    


                                                </div>

                                            </div>
                                            
                                        </div>
                                        <div className="divider"></div>
                                        <div className="price-section">
                                            <p className="label">Total order:</p>
                                            <div className="price">
                                                <div> {cart.cartTotalAmount} AZN</div>
                                                <div className="price-nds"> Including VAT in the amount {cart.cartTotalVat}AZN </div>
                                            </div>
                                        </div>
                                        <div className="submit-button">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className=" w-full mt-24 btn btn-brand-blue"
                                            aria-label="Register"
                                            disabled={_.isEmpty(dirtyFields) || !isValid}
                                            type="submit"
                                            size="large"
                                            onClick={orderProduct}
                                            >
                                            Submit
                                        </Button>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Box>
                            


                        </div>
                    </div>

                </section>
                
            )

        }
        
    </Layout>
  )
}

export default CartScreen