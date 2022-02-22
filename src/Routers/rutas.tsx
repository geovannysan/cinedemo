import {Tab1,Tab2,Tab3,Butaca} from './page';

const VIEWS_TAB1PAH="/tab1";
const VIEWS_TAB3PAH="/tab3";
const VIEWS_TAB2PAH="/tab2";
const VIEWS_BUTAPAH="/butaca";


const VIEWS_TAB1 ={
	component:Tab1,
	path: VIEWS_TAB1PAH
}
const VIEWS_TAB2 ={
	component:Tab2,
	path: VIEWS_TAB2PAH
}
const VIEWS_TAB3 ={
	component:Tab3,
	path: VIEWS_TAB3PAH
}
const VIEWS_BUTACA ={
	component:Butaca,
	path: VIEWS_BUTAPAH
}

export default[VIEWS_TAB1,VIEWS_TAB2,VIEWS_TAB3,VIEWS_BUTACA]