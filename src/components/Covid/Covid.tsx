import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonCardContent } from '@ionic/react';
import { chevronDown, chevronUp, warning } from 'ionicons/icons';


interface ContainerProps {

}

const Covid: React.FC<ContainerProps> = () => {

  return (
    <div className="ion-text-left">

      <h2 className="ion-text-center">Covid-19</h2><br />
      <IonCard>
        <IonRow>
          <IonCol size="10">
            <IonCardHeader>
              <IonCardTitle>Symptoms</IonCardTitle>
            </IonCardHeader>
          </IonCol>
          <IonCol className="iconCol">
            <IonCardTitle><IonIcon icon={chevronUp} /></IonCardTitle>
          </IonCol>
        </IonRow>
        <IonCardContent>
          <ul>
            <li>Fever or chills</li>
            <li>Cough</li>
            <li>Shortness of breath or difficulty breathing</li>
            <li>Fatigue</li>
            <li>Muscle or body aches</li>
            <li>Headache</li>
            <li>New loss of taste or smell</li>
            <li>Sore throat</li>
            <li>Congestion or runny nose</li>
            <li>Nausea or vomiting</li>
            <li>Diarrhea</li>
          </ul>

        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol size="10">
            <IonCardHeader>
              <IonCardTitle>What to do?</IonCardTitle>
            </IonCardHeader>
          </IonCol>
          <IonCol className="iconCol">
            <IonCardTitle><IonIcon icon={chevronDown} /></IonCardTitle>
          </IonCol>
        </IonRow>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol size="10">
            <IonCardHeader>
              <IonCardTitle>Additional Information</IonCardTitle>
            </IonCardHeader>
          </IonCol>
          <IonCol className="iconCol">
            <IonCardTitle><IonIcon icon={chevronDown} /></IonCardTitle>
          </IonCol>
        </IonRow>
      </IonCard>
    </div>

  );
};

export default Covid;