import {createSlice} from "@reduxjs/toolkit"
import { useEffect, useState } from "react";

import{toast} from "react-toastify";


const initialState={
    // cartItems: window.localStorage.getItem("cartItems")
    //     ?JSON.parse(localStorage.getItem("cartItems"))
    //     :[],
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    cartTotalVat:0,
}

const cartSlice= createSlice({
    name:"cart",
    initialState,
    
    reducers:{
        addToCart(state,action){
            const itemIndex =state.cartItems.findIndex(
                (item)=>item.id===action.payload.id
            );
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity+=1;
                toast.info("increassed product quantity",{
                    position:"bottom-left",
                })
            }
            else{
                const tempProduct={...action.payload, cartQuantity:1};
                state.cartItems.push(tempProduct);
                toast.success("added a new product to cart",{
                    position:"bottom-left",
                })
            }
             localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        removeFromCart(state, action){
           const nextCartItems= state.cartItems.filter(
                cartItem=>cartItem.id!==action.payload.id
            );
            state.cartItems=nextCartItems;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        decreaseCart(state,action){
            const itemIndex=state.cartItems.findIndex(
                (item)=>item.id===action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity-=1
            }else if(state.cartItems[itemIndex].cartQuantity===1){
                const nextCartItems= state.cartItems.filter(
                    cartItem=>cartItem.id!==action.payload.id
                );
                state.cartItems=nextCartItems;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        getTotal(state,action){
            let{total, quantity, vat}=state.cartItems.reduce((cartTotal, cartItem)=>{
                const{price, cartQuantity,vat}=cartItem;
                const itemTotal=price*cartQuantity;
                const itemVat=vat*cartQuantity;
                cartTotal.total+=itemTotal;
                cartTotal.vat+=itemVat;
                cartTotal.quantity+= cartQuantity;
                return cartTotal;
            },{
                total:0,
                quantity:0,
                vat:0,

            })
            state.cartTotalQuantity=quantity;
            state.cartTotalAmount=total;
            state.cartTotalVat=vat;
        }

    }
})
export const {addToCart,removeFromCart,decreaseCart,getTotal} =cartSlice.actions;

export default cartSlice.reducer;