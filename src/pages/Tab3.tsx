import { IonContent, IonHeader, IonPage, IonRow,IonGrid, IonTitle, IonToolbar } from '@ionic/react';
import GMaps from '../components/GMaps/GMaps';
import './Tab3.css';

const Tab3: React.FC = () => {

  const location = {
    address: 'No. 333 Antonio J. Villegas Street corner Padre Burgos Avenue & Natividad Lopez Street',  
    lat: 14.5995,
    lng: 120.9842,
  }
  

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

        <GMaps location={location} zoomLevel={17}/>


      </IonContent>
    
    </IonPage>

  );
};

export default Tab3;
