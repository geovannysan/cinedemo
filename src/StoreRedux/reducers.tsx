const defautStore={
	datos:[],
	toast:[]
}

export default function userReducer( state= defautStore,action:any):any{
	switch (action.type) {
		case "SET_TOAST":{
				return{
					...state,
					toast:[...state.toast,action.payload]
		
				}}
		
		default:{ return state}
	}
}