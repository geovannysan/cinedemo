import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import './ExploreContainer.css';

interface MoviesPropd{
	movies:any[];
  name:string;

}


const SliderView: React.FC<MoviesPropd> =({movies,name})=>{

	
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
      		// code...
      	}
      	if (item.poster) {
      	return(
      		<SwiperSlide key={item.key + "-movies"}>
      		<div>
          <img
               style={{ borderRadius: "10px",paddingBottom:"15px"}}
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