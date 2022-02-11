import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,isPlatform } from '@ionic/react';
import React, { useEffect, useState } from "react";
import { getMovies } from "../utils/api";
import ExploreContainer from '../components/ExploreContainer';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Tab1.css';

const width = window.innerWidth;
const height = window.innerHeight;

 const SPACING = 10;
 const ITEM_SIZE = isPlatform("ios") ? width * 0.72 : width * 0.74;
 const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
 const BACKDROP_HEIGHT = height * 0.45;

const slideOpts = {
  initialSlide: 1,
  speed: 400
};
const Tab1: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [slider1, setSlider1] = useState<any>(null);
//console.log({"uno":[movies]});
//console.log(slider1);
  useEffect(() => {
    const fetchData = async () => {
   //   

      const movies = await getMovies();
       
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
      margin: 0,
      marginBottom: "10px",
    },
    movieSlides: {
      width: `${ITEM_SIZE}px`,
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      padding: `calc(${SPACING}px * 2)`,
    },
  };
  return (
    <IonPage>
      
      <IonContent fullscreen >
      {movies.length !==0 &&(
        <div className="swiperraiz">
        <ExploreContainer  movies={movies} slider1={slider1} />
        <div className="SlidesContainer" >
              <Swiper
                className="AnimatedSlides"
                initialSlide={0}
                slidesPerView={1.25}
                spaceBetween={40}
                centeredSlides={true}
                watchSlidesProgress={true}
                onSwiper={(swiper) => {
                  setSlider1(swiper);
                  console.log(swiper);
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
                        <div className="movie-slide" style={styles.movieSlides}>
                          <img
                          className="swiperalt"
                            alt="alt-img"
                            src={item.poster}
                            style={styles.posterImage}
                          />
                          <div className="slide">
                            {/*/<h2>{item.title}</h2>/*/}
                           
                           
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </div></div>)}
         
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
