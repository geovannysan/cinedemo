import {
  IonPage,
  IonList,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import './InfoPeli.css';
import { useLocation } from 'react-router-dom';

const InfoCine: React.FC=()=>{
	const location = useLocation();
    const myparam = location.state;
    console.log(myparam)
	return(
		<IonPage >
		<IonHeader className="ion-no-border">
		<IonToolbar>
		<IonButtons slot="start">
          <IonBackButton icon="chevron-back-outline" >
          
          </IonBackButton>
        </IonButtons>
	
		</IonToolbar>
		</IonHeader>
		<div className="content">

		<div className="imgcontec">
		
			
		</div>
		
		<div className="List">
		<IonList>
		</IonList>	
		</div>
		</div>
		</IonPage>
			);

}

export default InfoCine;