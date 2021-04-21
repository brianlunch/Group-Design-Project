import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className="ion-text-center">
      
      <IonContent fullscreen>
        <h2>News</h2>

{
        <IonRow>
          
          <NewsContainer title="Coronavirus"/>         
          <NewsContainer title="Volcanic Eruption"/>     
                  
        </IonRow>
  }
        <IonRow>
          
        </IonRow>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
