import React from 'react';
import Navbar from "./../components/sources/Navbar";
import Footer from "./../components/sources/Footer";
import './../components/css/Home.css';
import homebild from './../components/img/homebild.jpg';

function Home() {
    return (
        <div>
            <body>
                <Navbar/>
                <div className='img-div'>
                    <img className='rp-img' src={homebild} alt="Bild einer Seidenstrasse"/>
                </div>
            <Footer/>
            </body>


        </div>
    );
}

export default Home;
