import axios from "axios";
import { createSlice, createAsyncThunk, thunkAPI } from "@reduxjs/toolkit";
import BASE_URL from "../../utils/constants";

// extragem datele api prin axios get method
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async(_, thunkAPI)=>{
        try{

            const res = await axios(`${BASE_URL}/products`)
            return res.data

        }catch(err){
            thunkAPI.rejectWithValue(err.res.data)
        }
    }
)
// asincron action with createAsyncThunk
export const productsSlice = createSlice({
  name: "products", 
  initialState: {
    list : [],
    filtered : [],
    related : []
  },
  // action care va filtra produsele pentru chaper than 50$
  reducers:{
    getFilteredProducts : (state , { payload } ) => {
      state.filtered = state.list.filter((product) => product.price < payload)
    }
  }
  ,
  // action care pria datele API asincron
  extraReducers: builder =>{
    builder.addCase(getProducts.fulfilled, (state , action) =>{
        state.list = action.payload
    } )
  }
});

// const getFilteredProducts = productsSlice.actions.getFilteredProducts - long version
export const {getFilteredProducts} = productsSlice.actions

export default productsSlice.reducer