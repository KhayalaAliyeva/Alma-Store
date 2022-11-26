import "../styles/main.scss"
import "react-toastify/dist/ReactToastify.css";
// import { StoreProvider } from "../utils/Store"


import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productsReducer, { productFetch } from "../features/productSlice";
import { productsApi } from "../features/productsApi";
import cartReducer, { getTotal } from "../features/cartSlice";


const store =configureStore({
  reducer:{
    products:productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware().concat(productsApi.middleware)
  
})
store.dispatch(productFetch());
store.dispatch(getTotal());

function MyApp({ Component, pageProps }) {
  return (
  
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
