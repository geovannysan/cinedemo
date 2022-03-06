import {   IonPage,  isPlatform } from '@ionic/react';
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { getMovies } from "../../utils/api";
import ExploreContainer from '../../components/ExploreContainer';
import SliderView from '../../components/SliderView';
import { Swiper, SwiperSlide } from "swiper/react";
import {useDispatch}from'react-redux';

import {setDetalle} from '../../StoreRedux/Slice/toastSlice';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Tab1.css';

const width = window.innerWidth;

const SPACING = 10;
const ITEM_SIZE = isPlatform("ios") ? width * 0.72 : width * 0.72;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;


const Tab1: React.FC = () => {
  const dispatch = useDispatch();
   
  const [movies, setMovies] = useState<any[]>([]);
  const [slider1, setSlider1] = useState<any>(null);
   let history = useHistory();

  function handleClick(items:any) {
    dispatch(setDetalle({...items}))
    history.push("/Info");
   
   
  }
//console.log({"uno":[movies]});
//console.log(slider1);
  useEffect(() => {

    const fetchData = async () => {
   //   

      const movies = await getMovies();
      //console.log(movies)
       
      setMovies([{ key: "empty-left" }, ...movies, { key: "empty-right" }]);

      if (slider1) {
       slider1.update();
        slider1.updateSlides();
      }
    };

    if (movies.length === 0) {
      fetchData();
    }
  }, [movies, slider1]);
  const styles: any = {
    posterImage: {
      width: "100%",
      height: `${ITEM_SIZE * 1.1}px`,
      objectFit: "cover",
      borderRadius: "14px",
    },
    movieSlides: {
      width: `${ITEM_SIZE}px`,
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      padding: `calc(${SPACING}px * 2)`,
    },
  };
  return ( 
    <IonPage >    
     
     <div className="cinebody"  >
           {movies.length !==0 &&(
             <div className="swiperraiz" >
             <ExploreContainer  movies={movies} slider1={slider1} name={"Estrenos"}  />
             
             <div className="SlidesContainer" >
                   <Swiper
                     className="AnimatedSlides"
                     initialSlide={movies.length/2}
                     slidesPerView={1.25}
                     spaceBetween={30}
                     centeredSlides={true}
                     watchSlidesProgress={true}
                     onSwiper={(swiper) => {
                       setSlider1(swiper);
                       
                     }}
                     effect={"coverflow"}
                     coverflowEffect={{
                       rotate: 0,
                       stretch: 0,
                       depth: 150,
                       modifier: 2,
                       slideShadows: false,
                     }}
                   >
                     {movies.map((item, index) => {
                       if (!item.poster) {
                         return (
                           <div
                             key={index + "-movies"}
                             style={{ width: EMPTY_ITEM_SIZE }}
                           />
                         );
                       }
                     if (item.poster) {
                         return (
                           <SwiperSlide key={item.key + "-movies"} >
                             <div className="movie-slide" style={styles.movieSlides} onClick={()=>handleClick(item)}>
                              
                               <img
                               className="swiperalt"
                                 alt="alt-img"
                                 src={item.poster}
                                 style={styles.posterImage}
                               />
                               

                               <div className="slide">
                               
                                {/* <IonLabel color="medium"><h1>{item.title}</h1></IonLabel>*/}
                                 
                               </div>
                             </div>
                           </SwiperSlide>
                         );
                       }
                     })}
                   </Swiper>
                 </div>
                 </div>

                 )}
           {movies.length !==0 &&(<div style={{height:"60%"}}>
                <SliderView movies={movies} name="Cartelera"/>
              </div> )}
         
              </div>
     
    </IonPage>
  );
};
 
export default Tab1;
