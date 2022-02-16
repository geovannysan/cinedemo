import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonLabel, IonIcon, IonAvatar } from '@ionic/react';
import {arrowUpCircleOutline,arrowUndoCircle,arrowBack,arrowForward, pin, heart, closeCircle, close } from 'ionicons/icons';
import './ExploreContainer.css';





interface ContainerProps {
  name:String;
  index?:number;
  movies:any[];
  translatex?:number;
  slider1?:any;
 }

const ExploreContainer: React.FC<ContainerProps> = ({ movies,slider1,name }) => {
const [slider2, setSlider2] = useState<any>(null);
 
const width = window.innerWidth;
    const height = window.innerHeight;
 const BACKDROP_HEIGHT = height * 0.45;
  useEffect(() => {
    
    if (slider1) {
      slider1.controller.control = slider2;
    }
    if (slider2) {
      slider2.controller.control = slider1;
    }
  }, [slider1, slider2]);

return (
  <div style={{background:"dark"}}> 
  <div className=""> 
  <h5>Las Nuevas Peliculas </h5>
  <IonChip color="warning">
          
          <IonLabel color="warning">{name}</IonLabel>
          
        </IonChip>
  </div>
       
    <div className="slider1" style={{ height:"100%",   position: "absolute" }}>
    
    <Swiper 
    color="dark"
    className="BackdropSlides"
    initialSlide={0}
    dir={"rtl"}
    watchSlidesProgress
    style={{height:"70%", width:"100%"}}
    parallax={true}
    onSwiper={(swiper)=>{
    	setSlider2(swiper);
    	const intervalOffset =-0.5;
    	swiper.on("progress",function(){
    		for (let i = 0; i < swiper.slides.length; i++) {
              const $slideEl: any = swiper.slides[i];
              let slideProgress = $slideEl.progress,
                innerOffset = swiper.width * intervalOffset,
                innerTranslate = slideProgress * innerOffset;

              $slideEl.querySelector(".slide-image").style.transform =
                "translateX(" + innerTranslate + "px)";
            }
    	});
    	 swiper.on("touchStart", function () {
            for (let i = 0; i < swiper.slides.length; i++) {
              const $slideEl: any = swiper.slides[i];
              $slideEl.style.transition = "";
            }
          });
          swiper.on("setTransition", function (speed) {
            for (let i = 0; i < swiper.slides.length; i++) {
              const $slideEl: any = swiper.slides[i];
              $slideEl.style.transition = speed + "ms";
              $slideEl.querySelector(".slide-image").style.transition =
                speed + "ms";
            }
          });
    }}
    >
    {movies && movies.map((item,index)=>{
    	if(item.backdrop){
    		return(
    			<SwiperSlide
          className="gradi"
    			key={item.key+ "-backdrop"}
    			style={ {
    				alignItems:"flex-start",
    				height,
    				overflow:"hidden",
    			}}
    			>
    			<img src={item.backdrop} alt="" className="slide-image"
    			style={{
    				width,
    				height:BACKDROP_HEIGHT,
    				objectFit:"cover",
    			}}
    			/>
    				
    			</SwiperSlide>
    			)
    	}
    })

    }

    </Swiper>
     <div className="show_bg_2" style={{ height: BACKDROP_HEIGHT }} />
    </div>
    </div>
  );
};

export default ExploreContainer;
