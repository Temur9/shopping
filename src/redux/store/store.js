import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../slice/product'

export default configureStore({
    reducer:{
       product: ProductReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})