
import './Hero.scss'
import '../../components/Footer/Footer.scss'
import React from 'react'

class Hero extends React.Component{
    render(){
        return <div>
           
            <div className="container">
            <h1>Foodies</h1>
            <p>of type and scrambled it to make a type specimen
book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was po</p>
              
                
                <button className="HeroButton" onClick={event =>  window.location.href='/homePage'}> Déscouver our recipes</button>
            </div>

            
        </div>
    
}
     
}
export default Hero
