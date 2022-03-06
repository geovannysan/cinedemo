import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonList,IonItem ,IonAvatar
,IonImg,IonLabel,IonModal,IonButton,IonButtons,IonIcon} from '@ionic/react';
import {useSelector}from'react-redux';


import './Tab2.css';

const Tab2: React.FC = () => {
	const listaFavo = useSelector((state:any)=> state.favorite);
	const [showModal, setShowModal] = useState(false);
 
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
          <IonTitle>Favoitos</IonTitle>      
        <IonButtons slot="end">
	    	<IonButton  fill="clear"  >
	              
	                <IonIcon   md="heart" />
	        </IonButton>      
    	</IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
        {listaFavo.favorite.length !==0 &&(listaFavo.favorite.map((items:any)=>{
        	return(
        	        	<IonItem key={items.key} lines="none" >
        	        	<IonAvatar slot="start">
        	                  <IonImg src={items.backdrop}/>
        	                </IonAvatar>
        	                <IonLabel>
        	                  <h2>{items.title}</h2>
        	                  <p>{items.releaseDate}</p>
        	                </IonLabel>
        	                 <IonLabel slot="end">
        	                 <p>{items.rating}  <IonIcon md="star-outline" /></p>
					           
					          </IonLabel>
        	        	</IonItem>)
                	})
        	)} 
        </IonList>        
      </IonContent>
       <IonModal isOpen={showModal} className='my-custom-class'>
       <IonContent >
        <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle>Modal Content</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          
            <div className="frame"> 
          
          <iframe className="imation" src="https://embed.lottiefiles.com/animation/9844"></iframe>
            </div>
          </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Tab2;
