import {useState ,useEffect} from 'react';

import { Redirect, Route  } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp, 
  IonRouterOutlet, 
  createAnimation, 
  isPlatform,
  IonToast,
  setupIonicReact,
} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import {useDispatch,useSelector}from'react-redux';

import {setToast} from './StoreRedux/Slice/toastSlice';
import { Network } from '@capacitor/network';
import {InfoPeli,Butaca,Screm} from './Routers/page';

import { wifi } from 'ionicons/icons';
import Tabs from './components/Tabs';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


/* Theme variables */


import SwiperCore, {
  Controller,
  EffectCoverflow,
  EffectFade,
  Lazy,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
} from "swiper";
SwiperCore.use([
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
  Thumbs,
  Lazy,
  EffectFade,
  EffectCoverflow,
  Parallax
]);

const animationBuilder = (baseEl: any, opts?: any) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)  
       .fromTo('transform', 'translateX(100px)', 'translateX(0px)')    
      .fromTo('opacity', 0, 1)
      .duration(350);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')    
     
      .duration(350);

    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);

    return animation;
  };
setupIonicReact();
const setStatusBarStyleLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};



const App: React.FC = () =>{
const valor:any= useSelector((state:any)=> state.toast)

const dispatch = useDispatch();
  
Network.addListener('networkStatusChange', status => {
  
  (status.connected)? dispatch(setToast({connected:status.connected,message:"conectado"})):dispatch(setToast({connected:true,message:"desconectado"}))
  
});





  if (isPlatform("android")) {  
  
    //StatusBar.setOverlaysWebView({ overlay: false });
   // StatusBar.getInfo();
   // setStatusBarStyleLight();
      }
//
return(


  <IonApp>
    <IonReactRouter  >
          <IonRouterOutlet  animation={animationBuilder} >

            <Route exact  path="/butacas" render={() => <Butaca  />} />
            <Route exact path="/Info" render={()=> <InfoPeli/>}/>
            <Route exact path="/" render={()=><Screm/>}/>
            <Route path="/home"  >
              <Tabs />
            </Route>

            

          </IonRouterOutlet>

        </IonReactRouter>

    <IonToast
        isOpen={valor.toast.connected}
        onDidDismiss={()=> dispatch(setToast({connected:false,message:"desconectado"}))}
        
        keyboardClose={true}       
        icon={wifi}
        position="bottom"
        message={valor.toast.message}
        duration={600}
      />

  </IonApp>
)};

export default App;
