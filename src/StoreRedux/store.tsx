import {configureStore} from '@reduxjs/toolkit';
import toastSlice from './Slice/toastSlice';
import favoriSlice from './Slice/favoriteSlice';



export const store = configureStore({
	reducer:{
		favorite:favoriSlice,
		toast:toastSlice,
		//detalle:toastSlice,
		
	}
})