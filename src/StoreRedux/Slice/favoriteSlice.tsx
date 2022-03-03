import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	favorite: [],
}
const favoriSlice= createSlice({
	name:'favorite',
	 initialState,
	reducers:{
		addFavo:(state:any,action)=>{
			//state.favorite= [...state.favorite,action.payload];
		},
		toggle:(state:any,action)=>{
			
			const verifi =state.favorite.find((iten:any)=>iten.key === action.payload.key);
			if (verifi) {
			
    
				const isLargeNumber = state.favorite.findIndex((item:any) =>item.key ==action.payload.key);
				console.log(isLargeNumber)
				//state.favorite.splice(state.favorite.findIndex((arrow:any) => arrow.key === action.payload.key), 1);
				state.favorite=state.favorite.filter((item:any,index:number)=>index !==isLargeNumber);

			}
			state.favorite= [...state.favorite,action.payload];
			//state.favorite= action.payload;
						
		},
		//deleFavo:(state,action)=>{
			//state.favorite=state.favorite.filter((item:any)=> item.key !== action.payload.ke)
		//},
	}
})
export const{toggle,addFavo}=favoriSlice.actions;
export default favoriSlice.reducer;  
