import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonLabel, IonIcon, IonAvatar } from '@ionic/react';
import './ExploreContainer.css';





interface ContainerProps {
  name:String;
  index?:number;
  movies:any[];
  translatex?:number;
  slider1?:any;
 }

const Scream: React.FC = () => {
const [slider2, setSlider2] = useState<any>(null);
 
const width = window.innerWidth;
    const height = window.innerHeight;
 const BACKDROP_HEIGHT = height * 0.45;
  useEffect(() => {
    
    
  }, [ ]);

return (
  <div style={{background:"dark"}}> 
  
    </div>
  );
};

export default Scream;