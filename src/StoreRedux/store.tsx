import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from'./reducers';
const rootReducer = combineReducers({
	Stores:reducer
})

const composeeEn = compose;

export default function generateStore(){
	const store= createStore(rootReducer,composeeEn(applyMiddleware(thunk)))
	return store
}