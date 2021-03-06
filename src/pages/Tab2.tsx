import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import CrisisCard from '../components/CrisisCard/CrisisCard';
import QuickLinkTile from '../components/QuickLinkTile/QuickLinkTile';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
       <IonHeader>
        <IonToolbar>
          <IonTitle>Current Crises Info</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Current Crises Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      <CrisisCard crisis="Coronavirus" severity="Very High" category="medical"/>
      <CrisisCard crisis="Politcal Unrest" severity="Very High" category="warning"/>
      <CrisisCard crisis="Flooding" severity="Low" category="weather"/>
      
      <IonRow>
        <IonCol>
        <QuickLinkTile title="Contact Emergency Services" icon="call"/>
        </IonCol>
        <IonCol>
        <QuickLinkTile title="Download Crises Information" icon="download"/>
        </IonCol>
      </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
