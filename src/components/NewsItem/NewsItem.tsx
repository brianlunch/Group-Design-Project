import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';
import { callOutline, downloadOutline, medkit, thunderstorm, warning } from 'ionicons/icons';
import './NewsItem.css';

interface ContainerProps {
  headline: string;
  source: string;
  url:string;
  date:string;
}

const NewsItem: React.FC<ContainerProps> = ({ headline,source,url,date }) => {


var justDate = " ";
    if(date != undefined){ justDate = date.split(" ")[0];}

  return (
      
    <div className="newsItemCard">
        <a className="newsLink" href={url}>
            <p className="ion-text-left noMarginB">{headline}</p>
            <IonRow className="fullWidth">
                <IonCol size="8">
                <p className="ion-text-left text-grey noMarginT">{source}</p>    
                </IonCol>
            
                <IonCol size="4">
                <p className="ion-text-right text-grey noMarginT">{justDate}</p>    
                </IonCol>
            </IonRow>
            
        </a>        
    </div>
  );
};

export default NewsItem;