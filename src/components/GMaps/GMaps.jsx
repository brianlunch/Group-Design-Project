import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IonIcon } from '@ionic/react'
import './GMaps.css'
import { pin } from 'ionicons/icons';
import LocationCard from '../locationCard/locationCard';


var hospitals = [

  //Philipe General Hospital
  {
    address: 'Philippine General Hospital', //'2 Taft Ave, Ermita, Manila, 1000 Metro Manila',  
    lat: 14.577551868728483,
    lng: 120.98625405784342
  },

  //National Children's Hospital
  , {
    address: 'National Childrens Hospital', //'264 E Rodriguez Sr. Ave, New Manila, Quezon City, 1113 Metro Manila, Philippines',
    lat: 14.621241096472879,
    lng: 121.03260263176489
  },

  //Advenist Medical Center
  , {
    address: 'Advenist Medical Center',//'1975 Corner Donada and, San Juan, Pasay, 1300 Metro Manila, Philippines',
    lat: 14.56010697966473,
    lng: 120.98539575091895
  },

  //St. Luke's Medical Hospital
  , {
    address: "St. Luke's Medical Hospital", //'279 E Rodriguez Sr. Ave, Quezon City, 1112 Metro Manila, Philippines',
    lat: 14.622118352419818,
    lng: 121.02393372302919
  },

  //Makati Medical Center
  , {
    address: 'Makati Medical Center',//'2 Amorsolo Street, Legazpi Village, Makati, 1229 Kalakhang Maynila, Philippines',
    lat: 14.562931483920998,
    lng: 121.02367623975037
  },

  //Santa Ana Hospital
  , {
    address: 'Santa Ana Hospital',//'2692 New Panaderos Street, 886, Santa Ana Manila, 1009 Metro Manila, Philippines',
    lat: 14.586689116630172,
    lng: 121.02401956252017
  },

  //Justice Jose Abad Santos General Hospital
  , {
    address: 'Justice Jose Abad Santos General Hospital',//'Numancia St, Binondo, Manila, Metro Manila, Philippines',
    lat: 14.601307924477235,
    lng: 120.97561105197998
  },

  //Dr. Jose Fabella Memorial Hospital
  , {
    address: 'Dr. Jose Fabella Memeorial Hospital',//'1003 Lope de Vega St, Santa Cruz, Manila, 1003 Metro Manila, Philippines',
    lat: 14.605959159624618,
    lng: 120.98299249153042
  }
]

const GMaps = ({ location, zoomLevel }) => (

  <div className="map">

    <div className="google-map">

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >

        {hospitals.map( (location) =>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />)}

      </GoogleMapReact>
    </div>

    <div className="list">
      {hospitals.map((location) =>
        <LocationCard location={location}></LocationCard>)}
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