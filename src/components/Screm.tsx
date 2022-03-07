import { Swiper, SwiperSlide } from "swiper/react";
import {useHistory} from 'react-router-dom';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonLabel, IonIcon, IonAvatar } from '@ionic/react';
import './ExploreContainer.css';







const Scream: React.FC = () => {
  const history = useHistory();
  const guardar =()=>{
     
      setTimeout(function(){
 
   history.replace("/home/tab1")
  

}, 7000);
      
  }

 guardar();

return (
  <IonPage>
  <IonContent >
        <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle></IonTitle>
              
            </IonToolbar>
          </IonHeader>
          
            <div className="frames">           
          <iframe className="imations" src="https://embed.lottiefiles.com/animation/64770"></iframe>
         < div className="label"><h1 className="letra">Gocoding</h1> </div>
            </div>
          </IonContent>
          </IonPage>
  );
};

export default Scream;