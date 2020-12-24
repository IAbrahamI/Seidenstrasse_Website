import React, {Component} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../css/Map.css';

class Map extends Component {
    render(){
        return (
            <div>
                <MapContainer className='map-container' center={[47.499882, 8.726160]} zoom={4} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[47.499882, 8.726160]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <br/>
            </div>
        )
    }
}

export default Map;
