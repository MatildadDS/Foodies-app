import React from 'react';
import "./styles/hero.scss";



export default function Hero() {
    return (
        <div className='hero-section'>
            <h1>FOODIES</h1>
            <p>We are a young French start-up that would like to develop B2C solutions focused on the world of cooking in general</p>
            <button className="bouton effect01" target="_blank"><span>Discover recipes</span></button>
        </div>
    )
}

