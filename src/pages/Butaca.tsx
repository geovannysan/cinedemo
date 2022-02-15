import { IonContent,IonToolbar,IonTitle,
  IonButton, IonHeader,IonChip,IonLabel, IonPage,IonIcon} from '@ionic/react';
import {useState,useEffect} from 'react';
import { triangle ,arrowBack,arrowDownCircle,arrowDown,arrowForward} from 'ionicons/icons';
import {Asientos} from '../libs/Asientos';


import './Butaca.css';

const Butaca: React.FC = () => {
  const [asieto,setAsientos] = useState<any[]>([]);
  useEffect(()=>{
    setAsientos(Asientos(12,10));
   

   

  },[])
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div  className="raiz" style={{height:"90%"}} >   
      <div style={{height:"20%",width:"100%"}}  >
        <div className="grad"> 
  <h5>Seleccione los <span><IonIcon icon={arrowBack}/> Asientos <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg></div> </span> </h5>
  <IonChip color="warning">
          
          <IonLabel color="warning">Pelicula</IonLabel> 
          
        </IonChip>
  </div>
      </div>
      <div className="container" style={{height:"40%",width:"100%"}}  >
        <div className="pantalla"></div>
        {asieto.length !==0 &&( asieto.map((val:any,i:number) => 
          <div className='row' key={i+1}>
          {val.map((e:any,index:number)=>
            <div key={index+1} className="round {e.letra} seat"></div>
            )}
          </div>))
        }               
      </div>
      <div className="timedate" style={{height:"35%",width:"100%"}} >
        <div style={{height:"25%",width:"100%"}}  >
        <div className="grad"> 
  <h5>Seleccione  </h5>
  <IonChip color="warning">
          
          <IonLabel color="warning">Pelicula</IonLabel>
          <IonButton>Siguiente</IonButton>
        </IonChip>
  </div>
      </div>
      </div>
     </div>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Butaca;