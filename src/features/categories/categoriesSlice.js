import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import BASE_URL from "../../utils/constants";

// asincron action with createAsyncThunk
export const getCategories = createAsyncThunk(
    "categories/getCategories",
     async()=>{

        const res = axios(`${BASE_URL}/categories`)
        return ((await res).data)

     }
    );
    
// prelucrarea actiunii cu createSlice
const categoriesSlice = createSlice({
    name:'categories',
    initialState : {
        list:[],
        isLoading: false
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action) =>{
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled,(state,action) =>{
            state.list = action.payload
            state.isLoading = false;
            // console.log(action.payload+'payload');
        })
        builder.addCase(getCategories.rejected,(state, action ) => {
            state.isLoading = false
            console.log('error')
        })

    }
})

export default categoriesSlice.reducer;