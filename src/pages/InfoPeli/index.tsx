import {
  IonPage,
  IonTabsContextState,
  IonList,
  IonHeader,
  IonToolbar,
  IonBackButton
} from '@ionic/react';
import './InfoPeli.css';


const InfoCine: React.FC=()=>{
	return(
		<IonPage>
		<IonHeader collapse="fade" translucent={true}
		>
		<IonToolbar>
		<IonBackButton

		/>
		Atras
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