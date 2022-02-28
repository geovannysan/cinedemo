import { Redirect, Route } from 'react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  createAnimation,
  IonTabButton,
  IonTabs} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import {Tab1,Tab2,Tab3} from '../Routers/page';

//import Tab1 from '../pages/Tabs/Tab1';
//import Tab2 from '../pages/Tabs/Tab2';

//import Tab3 from '../pages/Tabs/Tab3';
const animationBuilder = (baseEl: any, opts?: any) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)  
       .fromTo('transform', 'translateY(100px)', 'translateY(0px)')    
      .fromTo('opacity', 1, 0.2)
      .duration(550);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('transform', 'translateY(0px)', 'translateY(100px)')    
      .fromTo('opacity', 1, 0.2)
      .duration(550);

    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);

    return animation;
  };
const Tabs: React.FC = () => {
	return(   
      <IonTabs>
        <IonRouterOutlet animation={animationBuilder} >
          <Route exact path="/home/tab1" render={()=><Tab1/>}

              />

          <Route exact path="/home/tab2">
            <Tab2 />
          </Route>
          <Route path="/home/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/home">
            <Redirect from ="/home"to="/home/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/tab1">
            <IonIcon md="film-outline" />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon md="sparkles-outline"/>
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/tab3">
            <IonIcon md="ticket-outline" />
            

            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      )
};

export default Tabs;
