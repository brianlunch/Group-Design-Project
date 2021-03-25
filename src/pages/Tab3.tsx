import { IonContent, IonHeader, IonPage, IonRow,IonGrid, IonTitle, IonToolbar } from '@ionic/react';
import GMaps from '../components/GMaps/GMaps';
import './Tab3.css';

const Tab3: React.FC = () => {

  const location = {
    address: 'Philippine General Hospital', //'2 Taft Ave, Ermita, Manila, 1000 Metro Manila',  
    lat: 14.577551868728483,
    lng: 120.98625405784342
  }
  

  return (
    <IonPage>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Map</IonTitle>
          </IonToolbar>
        </IonHeader>

        <GMaps location={location} zoomLevel={17}/>


      </IonContent>
    
    </IonPage>

  );
};

export default Tab3;
