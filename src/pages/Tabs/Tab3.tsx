import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem,IonAvatar,IonLabel,IonList } from '@ionic/react';
import {useSelector}from'react-redux';
import './Tab3.css';

const Tab3: React.FC = () => {
  const listaFavo = useSelector((state:any)=> state.favorite);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Boletos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList >
        {listaFavo.asientos.length !==0 &&(listaFavo.asientos.map((items:any,index:number)=>{
          return(
                    <IonItem key={items.index} lines="none" >
                    <IonAvatar slot="start">
                            <IonLabel >
                            <h2>{items.key}</h2>
                           
                          </IonLabel>
                          </IonAvatar>
                          
                          <div>
                           <IonItem className="asientos"  slot="end" lines="none">
                          <div className="row">
                            {items.asiento.map((i:any,j:number)=>{

                              return(
                                <div key={j}  className={`round     ` }></div>

                                )
                            })

                            }
                            </div>
                             </IonItem >
                          </div>  
                    </IonItem>)
                  })
          )} 
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
