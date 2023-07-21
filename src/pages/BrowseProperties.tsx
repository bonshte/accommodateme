import { useLoadScript } from '@react-google-maps/api'
import React from 'react'
import Map from '../components/Map'
import '../styles/browseProperties.css'
const BrowseProperties = () => {

  const {isLoaded} = useLoadScript(
    {
      googleMapsApiKey: "AIzaSyB1XS6FJb5bMEV9-cxabQjHctcfMtUyVW0",
      libraries: ["places"]
    }
  );


  return (
    <div className="browse-section">
      <div className="browse-options">
        Browse Options
      </div>
      <div className="map-container">
        {isLoaded ? <Map /> : "loading"}
      </div>
    </div>
  )
}

export default BrowseProperties