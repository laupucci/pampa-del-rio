import React from "react";
import Map from "./map"
// import { Link } from "react-router-dom";
 import { MapContainer } from "./style";
 
 const MAP  = process.env.REACT_APP_API_MAP
 
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAP}`
const Ubication = () => {
  return (
<MapContainer>
 
 <Map className="map"
 googleMapURL={mapUrl}
 containerElement={<div style={{height: '400px', margin: '8%'}}/>}
 mapElement={<div style={{height: '90%', width: '100%'}}/>}
 loadingElement={<p>Cargando</p>}
/>
 </MapContainer>
  );
}

export default Ubication
