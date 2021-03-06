import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        


        <IonRow>
          <NewsContainer title="Coronavirus"/>         
          <NewsContainer title="Volcano"/>          
        </IonRow>

        <IonRow>
          
        </IonRow>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
