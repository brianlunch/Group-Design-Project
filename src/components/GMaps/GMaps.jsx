import React from 'react'
import GoogleMapReact from 'google-map-react'
import {IonIcon} from '@ionic/react'
import './GMaps.css'
import {pin} from 'ionicons/icons';

//Philipe General Hospital
const location = {
  address: 'Philippine General Hospital', //'2 Taft Ave, Ermita, Manila, 1000 Metro Manila',  
  lat: 14.577551868728483,
  lng: 120.98625405784342
}

//National Children's Hospital
const location2 = {
  address: 'National Childrens Hospital', //'264 E Rodriguez Sr. Ave, New Manila, Quezon City, 1113 Metro Manila, Philippines',
  lat: 14.621241096472879, 
  lng: 121.03260263176489
}

//Advenist Medical Center
const location3 = {
  address: 'Advenist Medical Center',//'1975 Corner Donada and, San Juan, Pasay, 1300 Metro Manila, Philippines',
  lat: 14.56010697966473, 
  lng: 120.98539575091895
}

//St. Luke's Medical Hospital
const location4 = {
  address: "St. Luke's Medical Hospital", //'279 E Rodriguez Sr. Ave, Quezon City, 1112 Metro Manila, Philippines',
  lat: 14.622118352419818, 
  lng: 121.02393372302919
}

//Makati Medical Center
const location5 = {
  address: 'Makati Medical Center',//'2 Amorsolo Street, Legazpi Village, Makati, 1229 Kalakhang Maynila, Philippines',
  lat: 14.562931483920998, 
  lng: 121.02367623975037
}

//Santa Ana Hospital
const location6 = {
  address: 'Santa Ana Hospital',//'2692 New Panaderos Street, 886, Santa Ana Manila, 1009 Metro Manila, Philippines',
  lat: 14.586689116630172, 
  lng: 121.02401956252017
}

//Justice Jose Abad Santos General Hospital
const location7 = {
  address: 'Justice Jose Abad Santos General Hospital',//'Numancia St, Binondo, Manila, Metro Manila, Philippines',
  lat: 14.601307924477235, 
  lng: 120.97561105197998
}

//Dr. Jose Fabella Memorial Hospital
const location8 = {
  address: 'Dr. Jose Fabella Memeorial Hospital',//'1003 Lope de Vega St, Santa Cruz, Manila, 1003 Metro Manila, Philippines',
  lat: 14.605959159624618, 
  lng: 120.98299249153042
}

const GMaps = ({ location, zoomLevel }) => (

    <div className="map">
  
      <div className="google-map">

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> 

          <LocationPin
            lat={location2.lat}
            lng={location2.lng}
            text={location2.address}
          />

          <LocationPin
            lat={location3.lat}
            lng={location3.lng}
            text={location3.address}
          />

          <LocationPin
            lat={location4.lat}
            lng={location4.lng}
            text={location4.address}
          />
          <LocationPin
            lat={location5.lat}
            lng={location5.lng}
            text={location5.address}
          />

          <LocationPin
            lat={location6.lat}
            lng={location6.lng}
            text={location6.address}
          />

          <LocationPin
            lat={location7.lat}
            lng={location7.lng}
            text={location7.address}
          />

          <LocationPin
            lat={location8.lat}
            lng={location8.lng}
            text={location8.address}
          />
        </GoogleMapReact>
      </div>
    </div>
)

const LocationPin = ({ text }) => (
    <div className="pin">
      <h1><IonIcon icon={pin} /></h1>
      <p className="pin-text">{text}</p>
    </div>
)

export default GMaps