import { Redirect, Route  } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp, 
  IonRouterOutlet, 
  createAnimation, 
  isPlatform,
  setupIonicReact
} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import Butaca from './pages/Butaca';

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
       .fromTo('transform', 'translateY(100px)', 'translateY(0px)')    
      .fromTo('opacity', 0, 1)
      .duration(350);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('transform', 'translateY(0px)', 'translateY(100px)')    
     
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


const App: React.FC = () => 
{
  if (isPlatform("android")) {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.getInfo();
    setStatusBarStyleLight();
      }
//
return(


  <IonApp>
    <IonReactRouter  >
          <IonRouterOutlet  animation={animationBuilder} >

            <Route exact path="/butacas" render={() => <Butaca  />} />
            <Route path="/home"  >
              <Tabs />
            </Route>

            <Route exact path="/">
            <Redirect from ="/"to="/home/tab1" />
          </Route>

          </IonRouterOutlet>

        </IonReactRouter>

  </IonApp>
)};

export default App;
