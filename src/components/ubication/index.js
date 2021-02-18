import React from "react";
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { MapContainer } from "./style";

const MAP  = process.env.REACT_APP_API_MAP
 
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAP}`

const libraries= ["places"];
const mapContainerStyle = {
  width: '98%',
  height: '98%',
  borderRadius: '10px'
};
const center = { lat: -31.827580105719733, lng: -60.87696273659974 };

const Map = () => {
  



  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: mapUrl,
    libraries,
  })

if (loadError) return "Error al cargar el mapa"
if (!isLoaded) return "Cargando mapa"

  return (
    <MapContainer>
      <GoogleMap
      mapContainerStyle={mapContainerStyle} zoom={15} center={center}
      >
        <Marker position={{ lat: -31.827580105719733, lng: -60.87696273659974 }}/>
      </GoogleMap>
    </MapContainer>
  )
}

export default Map
