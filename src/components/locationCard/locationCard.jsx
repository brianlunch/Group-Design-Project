import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle,IonCardTitle,IonIcon} from '@ionic/react';
import './LocationCard.css'
 
import {navigate } from 'ionicons/icons';




const LocationCard = ({ location }) => {


    var link = "https://www.google.com/maps?saddr=14.605959159624618,120.98299249153042&daddr="+location.lat+","+location.lng;
    
  return (
      
    <IonCard className="ion-text-left ion-full-width">

    

            <IonRow>
                <IonCol size="8">
                   <p><b>{location.name}</b></p> 
                </IonCol>

                <IonCol className="ion-text-center">
                    <a href={link}>
                    <IonIcon icon={navigate}></IonIcon><br/>
                    Directions
                    </a>
                </IonCol>

            </IonRow>
       
    

     
  </IonCard>

  );
};

export default LocationCard;