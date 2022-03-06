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
          <IonTitle>Tab  2</IonTitle>      
        <IonButtons slot="end">
	    	<IonButton  fill="clear" onClick={() => setShowModal(true)} >
	              
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
        <IonHeader className="border-ion-no-border">
            <IonToolbar>
              <IonTitle>Modal Content</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="./avatar-gollum.jpg"/>
                </IonAvatar>
                <IonLabel>
                  <h2>Gollum</h2>
                  <p>Sneaky little hobbitses!</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="./avatar-gollum.jpg"/>
                </IonAvatar>
                <IonLabel>
                  <h2>Gollum</h2>
                  <p>Sneaky little hobbitses!</p>
                </IonLabel>
              </IonItem>
              
            </IonList>
          </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Tab2;
