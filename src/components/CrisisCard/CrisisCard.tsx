import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';
import { medkit, thunderstorm, warning } from 'ionicons/icons';
import './CrisisCard.css';

interface ContainerProps {
  crisis: string;
  severity: string;
  category: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ crisis, severity,category }) => {

  return (
      
    <IonCard>

      <IonRow>
        <IonCol size="10">
        <IonCardHeader>
        <IonCardTitle>{crisis}</IonCardTitle>
        <IonCardSubtitle>{severity}</IonCardSubtitle> 
          </IonCardHeader>
    
        </IonCol>
        <IonCol className="iconCol">
            
        {category =="medical"?<IonCardTitle><IonIcon icon={medkit} /></IonCardTitle>:null}
        {category =="weather"?<IonCardTitle><IonIcon icon={thunderstorm} /></IonCardTitle>:null}
        {category =="warning"?<IonCardTitle><IonIcon icon={warning} /></IonCardTitle>:null}
    
        

        </IonCol>
        
      </IonRow>
     
  </IonCard>

  );
};

export default ExploreContainer;