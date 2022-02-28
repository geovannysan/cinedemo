import {IonPage,IonHeader,IonToolbar,IonIcon,
  IonBackButton,IonChip,IonButton,
  IonLabel,IonButtons,IonCardContent,
  IonCardSubtitle,IonCardTitle,IonCardHeader} from '@ionic/react';
import {useSelector}from'react-redux';
import './InfoPeli.css';


const InfoCine: React.FC=()=>{
	
	


    const myparam:any= useSelector(((state:any)=>state.detalle))
    const {poster,title,description,genres,rating} =  myparam.detalle;
   
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
    <div className="informacion">
        <IonCardHeader>            
            <IonCardTitle style={{color:"white",}} ><strong>{title}</strong></IonCardTitle>
            <IonCardSubtitle style={{color:"white", margin:"5"}}><strong>{rating} <IonIcon className="back"  md="star-outline" /></strong></IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent className="description">
           <strong>{description}</strong>
            </IonCardContent>
     </div>

		<img className="detalles"
        alt="alt-img"
        src={poster} />
    
		
		</div>
    </div>
		<div className="List">
	
     
    <div className="generos">
    {genres.map((dat:any,i:number)=>{
      return(
            <IonChip  color="primary">
                    
                    <IonLabel color="primary">{dat}</IonLabel>
                    
                  </IonChip>)
    })} 
     </div>
		
  
		</div>


		</IonPage>
			);



}

export default InfoCine;