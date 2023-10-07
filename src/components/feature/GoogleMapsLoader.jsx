"use client"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 3.154430,
  lng: 101.715103,
};

const GoogleMapsLoader = () => {
  return (
    <div >
      <LoadScript googleMapsApiKey="AIzaSyDrO-bgslCbM6ZERiLlx91rlmg9GehF-PY">
      	<GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
        	<Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapsLoader