import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import  productsSlice  from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
    
    reducer:{
        categories:categoriesSlice,
        products:productsSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

 
export default store;