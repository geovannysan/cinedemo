import {
  IonPage,
  IonList,
  IonHeader,
  IonToolbar,
  IonIcon,isPlatform,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import {useSelector}from'react-redux';
import './InfoPeli.css';


const InfoCine: React.FC=()=>{
	
	const width = window.innerWidth;

const SPACING = 10;
const ITEM_SIZE = isPlatform("ios") ? width * 0.72 : width * 0.72;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
    const myparam:any= useSelector(((state:any)=>state.detalle))
    const {poster,title,description,genres} =  myparam.detalle;
     const styles: any = {
    posterImage: {
      width: "100%",
      height: "100%",
      margin:0,
      objectFit: "cover",
      
    },
   
  };
	return(
		<IonPage >
		<IonHeader className="ion-no-border">
		<IonToolbar>
		<IonButtons slot="start">
          <IonBackButton  icon="chevron-back-outline" >
          
          </IonBackButton>
        </IonButtons>
	
		</IonToolbar>
		</IonHeader>
		<div className="content">

		<div className="imgcontec">
		<img
                           className="detalles"
                                 alt="alt-img"
                                 src={poster}
                                 
                               />
			
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