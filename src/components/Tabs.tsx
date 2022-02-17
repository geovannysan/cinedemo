import { Redirect, Route } from 'react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
  
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';

import Tab3 from '../pages/Tab3';

const Tabs: React.FC = () => {
	return(   
      <IonTabs>
        <IonRouterOutlet  >
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
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      )
};

export default Tabs;
