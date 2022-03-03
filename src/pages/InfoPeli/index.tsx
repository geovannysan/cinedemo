import {IonPage,IonHeader,IonToolbar,IonIcon,
  IonBackButton,IonChip,IonButton,IonText,
  IonLabel,IonButtons,IonCardContent,
  IonCardSubtitle,IonCardTitle,IonCardHeader} from '@ionic/react';
import {useSelector,useDispatch}from'react-redux';
import {toggle} from'../../StoreRedux/Slice/favoriteSlice';

import './InfoPeli.css';


const InfoCine: React.FC=()=>{
	
	

    const usedispatch = useDispatch();   
    const myparam= useSelector(((state:any)=>state.toast))
    const favorito = useSelector((state:any)=>state.favorite)

    
    const {poster,title,description,genres,rating,releaseDate} =  myparam.detalle;

   
	return(
		<IonPage >
    <IonHeader className="ion-no-border Toolbar">
    <IonToolbar>
    <IonButtons slot="start">
          <IonBackButton className="back"  icon="chevron-back-outline" >
          
          </IonBackButton>
        </IonButtons>
      
    <IonButtons slot="end">
      <IonButton color="#fff" fill="clear"  onClick={()=>usedispatch(toggle({...myparam.detalle}))}>
      
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
            <IonChip key={i}  color="primary">
                    
                    <IonLabel color="primary">{dat}</IonLabel>
                    
                  </IonChip>)
    })} 
     </div>
    <div className="datos-movie">
      <IonText><h1> {title}</h1></IonText>
      <IonText><h3> {releaseDate}</h3></IonText>
    </div>
		
    <div className="contaier-butto">
    <div className="contaier-button">
  <IonButton expand="full">Continuar</IonButton>
  </div>
  </div>
		</div>


		</IonPage>
			);



}

export default InfoCine;