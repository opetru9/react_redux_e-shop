import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import  productsSlice  from "./products/productsSlice";

const store = configureStore({
    reducer:{
        categories:categoriesSlice,
        products:productsSlice,
    },
    devTools:true,
})

 
export default store;