import {configureStore} from '@reduxjs/toolkit';
import toastSlice from './Slice/toastSlice';


export const store = configureStore({
	reducer:{
		toast:toastSlice,
		detalle:toastSlice
	}
})