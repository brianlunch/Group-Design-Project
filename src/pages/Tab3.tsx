import { IonContent, IonHeader, IonPage, IonRow,IonGrid, IonTitle, IonToolbar } from '@ionic/react';
import MapContainer from '../components/MapContainer/MapContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Map</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow className ="mapHeight">
          <MapContainer/>
          </IonRow>
          <IonRow className ="locationsHeight">
          
          </IonRow>
        </IonGrid>


      </IonContent>
    
    </IonPage>

  );
};

export default Tab3;
