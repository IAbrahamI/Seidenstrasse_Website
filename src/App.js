import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Navbar from "./components/sources/Navbar";
import './components/css/App.css';
import MapContent from "./components/sources/MapContent";
import Map from "./components/sources/Map";

function App() {
    return (
      <div>
        <Navbar/>
        <Map/>
        <br/>
        <MapContent/>
      </div>
  );
}

export default App;
