import React from "react";
import { Redirect, Route,useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import './ExploreContainer.css';

interface MoviesPropd{
	movies:any[];
  name:string;

}


const SliderView: React.FC<MoviesPropd> =({movies,name})=>{
let history = useHistory();
  function handleClick() {
   history.push("/butacas");
   // router.push("/butacas", "back", "push");
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
      		// code...
      	}
      	if (item.poster) {
      	return(
      		<SwiperSlide key={item.key + "-movies"}>
      		<div style={{ borderRadius: "15px",paddingBottom:"15px"}} onClick={handleClick}>
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