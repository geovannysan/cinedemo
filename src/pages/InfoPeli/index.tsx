import {IonPage,IonHeader,IonToolbar,IonIcon,
  IonBackButton,IonChip,IonButton,IonTitle,
  IonLabel,IonButtons,IonCardContent,
  IonCardSubtitle,IonCardTitle,IonCardHeader} from '@ionic/react';
import {useSelector}from'react-redux';
import './InfoPeli.css';


const InfoCine: React.FC=()=>{
	
	


    const myparam:any= useSelector(((state:any)=>state.detalle))
    const {poster,title,description,genres} =  myparam.detalle;
   
	return(
		<IonPage >
    <IonHeader className="ion-no-border Toolbar">
    <IonToolbar>
    <IonButtons slot="start">
          <IonBackButton className="back"  icon="chevron-back-outline" >
          
          </IonBackButton>
        </IonButtons>
      
    <IonButtons slot="end">
      <IonButton color="#fff" fill="clear">
      
        <IonIcon className="back"  md="heart" />
      </IonButton>
    </IonButtons>
  
    </IonToolbar>
    </IonHeader>
		<div className="content">
   
		<div className="imgcontec">
		<img
    className="detalles"
    alt="alt-img"
    src={poster} />
 
		
		</div>
		
		<div className="List">
     
    <div className="generos">
    {genres.map((dat:any,i:number)=>{
      return(
            <IonChip  color="primary">
                    
                    <IonLabel color="primary">{dat}</IonLabel>
                    
                  </IonChip>)
    })
                
   }

      
   
       
     </div>
		
    <IonButton expand="full"> Continuar</IonButton>
		</div>
		</div>

		</IonPage>
			);

}

export default InfoCine;