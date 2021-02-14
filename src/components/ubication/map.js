import React from "react";
import {GoogleMap,
withScriptjs,
withGoogleMap} from "react-google-maps";


const Map = () => {
  return (
    
 <GoogleMap
 //defaultZoom={context.defaultZoom}
 //defaultCenter={context.defaultCenter}
 defaultZoom={15}
 defaultCenter={{ lat: -31.827580105719733, lng: -60.87696273659974 }}
 />
   
  );
}

// GoogleMap.contextTypes = {
//   defaultZoom: 15,
//   defaultCenter: { lat: -31.827580105719733, lng: -60.87696273659974 }
// };


export default withScriptjs(
  withGoogleMap(
    Map
  )
)
