import { IonContent, IonPage,IonButton} from '@ionic/react';
import {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Asientos} from '../../libs/Asientos';
import './Butaca.css';
const Butaca: React.FC = () => {
  const [asieto,setAsientos] = useState<any[]>([]);
  let route = useHistory();
  function handleClick() {
    route.goBack();
  }
  var arrayList:any = [];
function toggleValueInArray(array:any, value:string) {
  var index = array.indexOf(value);
  if (index == -1) {
    array.push(value);
  } else {
    do {
      array.splice(index, 1);
      index = array.indexOf(value);
    } while (index != -1);
  }
}
  
  useEffect(()=>{
    setAsientos(Asientos(12,10)); 
    const container = document.querySelectorAll('.container');
container.forEach(c=>{c.addEventListener('click', (e:any) => {
   const dato = e.target.getAttribute('class').split(" ")[1];
  if (e.target.classList.contains('round') && !e.target.classList.contains('occupied')) 
    e.target.classList.toggle('selected');
   toggleValueInArray(arrayList,dato)
   
   return e.target;
    
    
})});
  },[])
  return (
    <IonPage>
      <IonContent fullscreen>
      
      <div  className="raiz" >   
      <div style={{height:"30%",width:"100%",justifyContent:"center"}}  >
        <div className="grad"> 
      <h3>Seleccione los Asientos</h3>
  
  </div>
   <div className="grad2 "> 
      <h6 style={{margin: 0 }}>Suspiro</h6>
<p style={{margin:0,paddingTop:5 }}>Asentos Disponibles</p>
  
  </div>

      </div>
      <div className="container" style={{height:"40%",width:"100%"}}  >
        <div className="pantalla"></div>
        {asieto.length !==0 &&( asieto.map((val:any,i:number) => 
          <div className='row' key={i+1}>
          {val.map((e:any,index:number)=>
            
             (e.letra=="f5"||e.letra=="f4")?<div key={index+1} className={`round ${e.letra} seat occupied ` }></div>:<div key={index+1} className={`round ${e.letra} seat  ` }></div>
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
      <IonButton style={{width:"70%",height:50}} onClick={handleClick}>Siguiente</IonButton>    
   
      
      </div>
      </div>
       
     </div>

        
        
      </IonContent>
    </IonPage>
  );
};

export default Butaca;