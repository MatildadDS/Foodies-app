import React from 'react';
import "./styles/hero.scss";



export default function Hero() {
    return (
        <div className='hero-section'>
            <h1>FOODIES</h1>
            <p>Foodies est une jeune start-up française qui souhaiterai développer des solutions B2C axés sur le monde de la cuisine en général</p>
            <button className="bouton effect01" target="_blank"><span>Découvrir les recettes</span></button>
        </div>
    )
}

