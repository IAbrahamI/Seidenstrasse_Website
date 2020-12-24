import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Navbar from "./components/sources/Navbar";
import './components/css/App.css';
import Footer from "./components/sources/Footer";
import Map from "./components/sources/Map";

function App() {
    return (
      <div>
        <Navbar/>
        <Map/>
        <br/>
        <Footer/>
      </div>
  );
}

export default App;
