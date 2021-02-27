import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';
import { callOutline, downloadOutline, medkit, thunderstorm, warning } from 'ionicons/icons';
import './QuickLinkTile.css';

interface ContainerProps {
  title: string;
  icon: string;
}

const QuickLinkTile: React.FC<ContainerProps> = ({ title,icon }) => {

  return (
      
    <IonCard className="ion-text-center fullHeight">

    
        <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>

        <IonCardTitle>
        {icon =="call"?<IonCardTitle><IonIcon icon={callOutline} /></IonCardTitle>:null}
        {icon =="download"?<IonCardTitle><IonIcon icon={downloadOutline} /></IonCardTitle>:null}
        </IonCardTitle>

          </IonCardHeader>

     
  </IonCard>

  );
};

export default QuickLinkTile;