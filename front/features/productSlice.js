import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    items:[],
    status:null,
};
export const productFetch=createAsyncThunk(
    "products/productsFetch",
    async()=>{
        const response=await axios.get("http://localhost:9000/macbook-pro-data")
        return response?.data;
    }
)
const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:{
        [productFetch.pending]:(state, action)=>{
            //immer
            state.status="pending";
        },
        [productFetch.fulfilled]:(state, action)=>{
            //immer;
            state.status="success"
            state.items=action.payload;
        },
        [productFetch.rejected]:(state, action)=>{
            //immer
            state.status="rejected";
        }
    },
})

export default productSlice.reducer;