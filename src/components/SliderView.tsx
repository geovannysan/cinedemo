import React from "react";
import {  useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {useDispatch}from'react-redux';
import {setDetalle} from '../StoreRedux/Slice/toastSlice';
import './ExploreContainer.css';

interface MoviesPropd{
	movies:any[];
  name:string;

}


const SliderView: React.FC<MoviesPropd> =({movies,name})=>{
  let history = useHistory();
    const dispatch = useDispatch();
   function handleClick(items:any) {
    dispatch(setDetalle({...items}))
    history.push("/Info");
   
   
  }

 

	
	return(
	<>
   
		<div className="" style={{paddingLeft:10}}> <h2>Cartelera</h2>   </div>
		 <Swiper
        slidesPerView={3}
        spaceBetween={10}        
        className="mySwiper"

      >
      {movies.map((item,index)=>{
      	if (!item.poster) {
      		return(
			<div
                        key={index + "-movies"}
                       
                      />
      			)
      	
      	}
      	if (item.poster) {
      	return(
      		<SwiperSlide key={item.key + "-movies"}>
      		<div style={{ borderRadius: "15px",paddingBottom:"15px"}} onClick={()=>handleClick(item)}>
          <img
               
                className="swiperalt"
                            alt="alt-img"
                            src={item.poster}
                            
                          />
        </div>
        </SwiperSlide>

      		);}
      })

      }
        
        
      </Swiper>
		</>
		);
}

export default SliderView;