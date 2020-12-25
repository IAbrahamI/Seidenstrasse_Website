import React from 'react';
import Navbar from "./../components/sources/Navbar";
import './../components/css/Home.css';
import homebild from './../components/img/homebild.jpg';

function Home() {
    return (
        <div>
            <Navbar/>
            <div className='img-div'>
                <img className='rp-img' src={homebild} alt="Bild einer Seidenstrasse"/>
            </div>

        </div>
    );
}

export default Home;
