import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	favorite: [],
	asientos:[]
}
const favoriSlice= createSlice({
	name:'favorite',
	 initialState,
	reducers:{
		addasientos:(state:any,action)=>{ 
			state.asientos = state.asientos.filter((i:any)=>i.key !==action.payload.key);
			state.asientos= [...state.asientos,action.payload];
		},
		toggle:(state:any,action)=>{
			state.favorite= [...state.favorite,action.payload];
						
		},
	     deleFavo:(state:any,action)=>{
			state.favorite= state.favorite.filter((item:any)=>item.key !== action.payload.key);
		},
	}
})
export const{toggle,addasientos,deleFavo}=favoriSlice.actions;
export default favoriSlice.reducer;  
