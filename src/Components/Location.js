import React from "react";
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 26.8530,
      lng: 75.8047
    },
    zoom: 18
  };
 
  return (
    
    <div style={{ height: '60vh', width: '100%' }}>
    
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={26.8530}
          lng={75.8047}
          text= "Ticket Book"
        />
      </GoogleMapReact>
    </div>
  );
}