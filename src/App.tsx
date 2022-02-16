import { Redirect, Route } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  createAnimation,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import {StatusBar} from '@awesome-cordova-plugins/status-bar/';
import { ellipse, square, triangle } from 'ionicons/icons';
import Burtaca from './pages/Butaca';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
      .fromTo('opacity', 0, 1)
      .duration(250);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('opacity', 1, 0)
      .duration(250);

    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);

    return animation;
  };
setupIonicReact();

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>

      <IonTabs>
        <IonRouterOutlet  animation={animationBuilder}>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <IonRouterOutlet animation={animationBuilder}>
      <Route  exact path="/butacas">
    <Burtaca/>
    </Route>
    </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
