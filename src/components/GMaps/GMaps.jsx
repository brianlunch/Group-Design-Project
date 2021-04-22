import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IonIcon, IonRow, IonCol } from '@ionic/react'
import './GMaps.css'
import { pin } from 'ionicons/icons';
import LocationCard from '../locationCard/locationCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap'

var items = []; //Array to push the items into

function getHospitals() {
  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.599512,120.9842222&radius=1500&type=hospital&key=AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg")
    .then(response => response.json())
    .then(data => console.log(data));
}

function getRestaurants() {
  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.599512,120.9842222&radius=1500&type=restaurant&key=AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg")
    .then(response => response.json())
    .then(data => console.log(data));
}

function getPharmacy() {
  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.599512,120.9842222&radius=1500&type=pharmacy&key=AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg")
    .then(response => response.json())
    .then(data => console.log(data));
}

function getEmbassy() {
  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.599512,120.9842222&radius=1500&type=embassy&key=AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg")
    .then(response => response.json())
    .then(data => console.log(data));
}

var hospitals = [

  //Philipe General Hospital
  {
    name: 'Philippine General Hospital', //'2 Taft Ave, Ermita, Manila, 1000 Metro Manila',  
    lat: 14.577551868728483,
    lng: 120.98625405784342
  },

  //National Children's Hospital
  , {
    name: 'National Childrens Hospital', //'264 E Rodriguez Sr. Ave, New Manila, Quezon City, 1113 Metro Manila, Philippines',
    lat: 14.621241096472879,
    lng: 121.03260263176489
  },

  //Advenist Medical Center
  , {
    name: 'Adevntist Pharmacy',//'1975 Corner Donada and, San Juan, Pasay, 1300 Metro Manila, Philippines',
    lat: 14.56010697966473,
    lng: 120.98539575091895
  },

  //St. Luke's Medical Hospital
  , {
    name: "St. Luke's Medical Hospital", //'279 E Rodriguez Sr. Ave, Quezon City, 1112 Metro Manila, Philippines',
    lat: 14.622118352419818,
    lng: 121.02393372302919
  },

  //Makati Medical Center
  , {
    name: 'Makati Medical Center',//'2 Amorsolo Street, Legazpi Village, Makati, 1229 Kalakhang Maynila, Philippines',
    lat: 14.562931483920998,
    lng: 121.02367623975037
  },

  //Santa Ana Hospital
  , {
    name: 'Santa Ana Hospital',//'2692 New Panaderos Street, 886, Santa Ana Manila, 1009 Metro Manila, Philippines',
    lat: 14.586689116630172,
    lng: 121.02401956252017
  },

  //Justice Jose Abad Santos General Hospital
  , {
    name: 'Justice Jose Abad Santos General Hospital',//'Numancia St, Binondo, Manila, Metro Manila, Philippines',
    lat: 14.601307924477235,
    lng: 120.97561105197998
  },

  //Dr. Jose Fabella Memorial Hospital
  , {
    name: 'Dr. Jose Fabella Memeorial Hospital',//'1003 Lope de Vega St, Santa Cruz, Manila, 1003 Metro Manila, Philippines',
    lat: 14.605959159624618,
    lng: 120.98299249153042
  }
]

function hosp() {
  hospitals = [//Philipe General Hospital
    {
      name: 'Philippine General Hospital', //'2 Taft Ave, Ermita, Manila, 1000 Metro Manila',  
      lat: 14.577551868728483,
      lng: 120.98625405784342
    },

    //National Children's Hospital
    , {
      name: 'National Childrens Hospital', //'264 E Rodriguez Sr. Ave, New Manila, Quezon City, 1113 Metro Manila, Philippines',
      lat: 14.621241096472879,
      lng: 121.03260263176489
    },

    //Advenist Medical Center


    //St. Luke's Medical Hospital
    {
      name: "St. Luke's Medical Hospital", //'279 E Rodriguez Sr. Ave, Quezon City, 1112 Metro Manila, Philippines',
      lat: 14.622118352419818,
      lng: 121.02393372302919
    },

    //Makati Medical Center
    , {
      name: 'Makati Medical Center',//'2 Amorsolo Street, Legazpi Village, Makati, 1229 Kalakhang Maynila, Philippines',
      lat: 14.562931483920998,
      lng: 121.02367623975037
    }]
}



const GMaps = ({ location, zoomLevel }) => (

  <div className="map">

    <div className="google-map">

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >

        {hospitals.map((location, index) =>
          <LocationPin
            key={index}
            lat={location.lat}
            lng={location.lng}
            text={location.name}
          />)}

      </GoogleMapReact>
    </div>

    <div className="list">
      <IonRow >
        <IonCol size="9"></IonCol>
        <DropdownButton id="dropdown-basic-button" title="Filter">
          <Dropdown.Item onClick={hosp}>Hospitals</Dropdown.Item>
          <Dropdown.Item>Embassy</Dropdown.Item>
          <Dropdown.Item >Trocaire Services</Dropdown.Item>
          <Dropdown.Item >Pharmacy</Dropdown.Item>
        </DropdownButton>
      </IonRow>

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

// class APICall extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//   }

//   componentDidMount() {
//       fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.599512,120.9842222&radius=1500&type=hospital&key=AIzaSyD3Dzg1q3SVdZx8OMq_41sY8VLZ7vdJNHg")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )     
//   }
// }

export default GMaps