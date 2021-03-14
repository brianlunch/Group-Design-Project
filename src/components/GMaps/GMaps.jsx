import React from 'react'
import GoogleMapReact from 'google-map-react'
import {IonIcon} from '@ionic/react'
import './GMaps.css'
import {pin} from 'ionicons/icons';


const location = {
  address: 'No. 333 Antonio J. Villegas Street corner Padre Burgos Avenue & Natividad Lopez Street',  
  lat: 14.5995,
  lng: 120.9842,
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
          /> 
        </GoogleMapReact>
      </div>
    </div>
)

const LocationPin = ({ text }) => (
    <div className="pin">
      <h1><IonIcon icon={pin} /></h1>
      
    </div>
)

export default GMaps