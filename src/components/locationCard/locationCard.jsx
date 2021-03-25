import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';
import './LocationCard.css'
 
import {navigate } from 'ionicons/icons';




const LocationCard = ({ location }) => {


    var link = "https://www.google.com/maps?saddr=My+Location&daddr="+location.lat+","+location.lng;
    
  return (
      
    <IonCard className="ion-text-left ion-full-width">

    

            <IonRow>
                <IonCol size="8">
                    <p>{location.address}</p>
                </IonCol>

                <IonCol className="ion-text-center">
                    <a href={link}>
                    <IonIcon icon={navigate}></IonIcon>
                    <p>Directions</p>
                    </a>
                </IonCol>

            </IonRow>
       
    

     
  </IonCard>

  );
};

export default LocationCard;