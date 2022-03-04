import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	toast:[],
	detalle:[]
}
const toastSlice= createSlice({
	name:'toast',
	 initialState,
	reducers:{
		setToast:(state,action)=>{
			state.toast= action.payload;
		}, 
		setDetalle:(state,action)=>{
			 state.detalle= action.payload;
			
			
		}


	}
})
export const{setToast,setDetalle }=toastSlice.actions;
export default toastSlice.reducer;

