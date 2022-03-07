import { IonContent, IonPage,IonButton,IonHeader,IonToolbar,IonBackButton,IonButtons,IonModal,IonTitle } from '@ionic/react';
import {useState,useEffect} from 'react';
import {useSelector,useDispatch}from'react-redux';
import { useHistory } from "react-router-dom";
import {addasientos} from '../../StoreRedux/Slice/favoriteSlice';

import {Asientos} from '../../libs/Asientos';
import './Butaca.css';
const Butaca: React.FC = () => {
  const myparam= useSelector(((state:any)=>state.toast))
    const ocupados = useSelector((state:any)=>state.favorite.asientos)
  const {title,key} =  myparam.detalle;
  const [asieto,setAsientos] = useState<any[]>([]);
  const [selection,setSelecion]= useState<any[]>([]);
  const [anima,setAnima]= useState<boolean>(false);
  
  let usedispatch = useDispatch();
  const history = useHistory();
     
  
  var arrayList:any = [];
function toggleValueInArray(array:any, value:string) {
  if (value!=null){
      var index = array.indexOf(value);
      if (index === -1) {
        array.push(value);
        
        
      } else {
        do {
          array.splice(index, 1);
          index = array.indexOf(value);
        } while (index !== -1);
      }
          setSelecion(array)
    }
}
  useEffect(()=>{
    setAsientos(Asientos(12,10)); 
    const container = document.querySelectorAll('.container');
container.forEach(c=>{c.addEventListener('click', (e:any) => {
   const dato = e.target.getAttribute('class').split(" ")[1];
if (dato === undefined || dato === null)return true;
   if (e.target.classList.contains('occupied')) return 
  if (e.target.classList.contains('round')) 
    e.target.classList.toggle('selected');
  
   toggleValueInArray(arrayList,dato)
   
   return e.target;  
})});
  },[])
  const asi = ocupados.some((item:any)=> item.key === key)
 const verific:any =[]
  if (asi) {
     const newarr = ocupados.filter((item:any)=> item.key === key)
   
       newarr.map((item:any)=>{
             item.asiento.map((i:any)=>{ 
               verific.push(  i)
             });
          })
    asieto.map(i=>{
      i.map((val:any)=>{
         //console.log(dataArr.includes( val.letra ))
        if( verific.includes( val.letra )){
          val.estado="occupied"
        }
       return val;
      })
    })
  }
  
   


   const guardar =()=>{
     if(!selection) return;
     setAnima(true);
      setTimeout(function(){
  setAnima(false)
   usedispatch(addasientos({key:key,asiento:[...verific,...selection]})) 
   history.replace("/home/tab3")

}, 7000);
      
  }
  return (
    <IonPage>
    <IonHeader className="ion-no-border" >
    <IonToolbar >
    <IonButtons slot="start">
          <IonBackButton className="back" icon="chevron-back-outline" >
          
          </IonBackButton>
        </IonButtons>
  
    </IonToolbar>
    </IonHeader>
      <IonContent fullscreen>
      
      <div  className="raiz" >   
      <div style={{height:"30%",width:"100%",justifyContent:"center"}}  >
        <div className="grad"> 
      <h3>Seleccione los Asientos</h3>
  
  </div>
   <div className="grad2 "> 
      <h6 style={{margin: 0 }}>{title}</h6>
<p style={{margin:0,paddingTop:5 }}>Asientos Disponibles</p>
  
  </div>

      </div>
      <div className="container" style={{height:"40%",width:"100%"}}  >
        <div className="pantalla"></div>
        {asieto.length !==0 &&( asieto.map((val:any,i:number) => 
          <div className='row' key={i+1}>
          {val.map((e:any,index:number)=>
            
             <div key={index+1} id={e.letra} className={`round ${e.letra} seat ${e.estado}  ` }></div>
            )}
          </div>))
        }               
      </div>
      <div className="timedate" style={{height:"40%",width:"100%"}} >
        
        <div className="grad">        
        <a> <img className="img" alt="no"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRIibXVIU4DURCA4Q9EBaLBoJrgKiEcoBfoATCcgBOgOQMXwGFx1VhIkMgmBQEGSJAkQDFvkidoRZn57Wa/TXb3zfD/JnhMcP7sCO9YVuCHeGv4RzY+xkvDPzHNxPexaPgXjjPxEeYN/8ZJJr6Hh4b/4DQT38V9w5c4y8SHuOvw80x8BzcdfpGJDzDr8EtsZT7gusOvsL0Jsu6mkuPfV/6KKP7I0RC3in7TqPSgRaWjIioddlHpuI7GeFa0cKIDvCpamVHp0o8meFp18RepAkYE7nsHmgAAAABJRU5ErkJggg=="/> 
   
   </a> <h3>20 Enero 2022  </h3>
    <a><img className="img" alt="no" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-right-arrows-those-icons-fill-those-icons-1.png"/>      
  </a></div>
   <div className="grad">        
  <a> <img className="img" alt="no" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRIibXVIU4DURCA4Q9EBaLBoJrgKiEcoBfoATCcgBOgOQMXwGFx1VhIkMgmBQEGSJAkQDFvkidoRZn57Wa/TXb3zfD/JnhMcP7sCO9YVuCHeGv4RzY+xkvDPzHNxPexaPgXjjPxEeYN/8ZJJr6Hh4b/4DQT38V9w5c4y8SHuOvw80x8BzcdfpGJDzDr8EtsZT7gusOvsL0Jsu6mkuPfV/6KKP7I0RC3in7TqPSgRaWjIioddlHpuI7GeFa0cKIDvCpamVHp0o8meFp18RepAkYE7nsHmgAAAABJRU5ErkJggg=="/> 
   
   </a> <h3>12:00  </h3>
   <a><img className="img" alt="no" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-right-arrows-those-icons-fill-those-icons-1.png"/>      
  </a>
  </div>
      <div className="grad" style={{paddingBottom:15}}>    
      <IonButton style={{width:"70%",height:50}} onClick={guardar}>Siguiente</IonButton>    
   
      
      </div>
      </div>
       
     </div>

        
        
      </IonContent>
       <IonModal isOpen={anima} className='my-custom-class'>
       <IonContent >
        <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle></IonTitle>
              <IonButtons slot="end">
                
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

export default Butaca;