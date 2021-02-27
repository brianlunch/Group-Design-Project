import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CrisisCard from '../components/CrisisCard/CrisisCard';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Current Crises Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      <CrisisCard crisis="Coronavirus" severity="Very High" category="medical"/>
      <CrisisCard crisis="Politcal Unrest" severity="Very High" category="warning"/>
      <CrisisCard crisis="Flooding" severity="Low" category="weather"/>
      
      

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
