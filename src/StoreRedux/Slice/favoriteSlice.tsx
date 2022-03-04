import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	favorite: [],
}
const favoriSlice= createSlice({
	name:'favorite',
	 initialState,
	reducers:{
		addFavo:(state:any,action)=>{ 
			state.favorite= action.payload;
		},
		toggle:(state:any,action)=>{
			state.favorite= [...state.favorite,action.payload];
						
		},
	     deleFavo:(state:any,action)=>{
			state.favorite= state.favorite.filter((item:any)=>item.key !== action.payload.key);
		},
	}
})
export const{toggle,addFavo,deleFavo}=favoriSlice.actions;
export default favoriSlice.reducer;  
