
export default Hero;
import  {DropDownMenu } from '../../components/Navbar';
import React from 'react'
import Footer from '../../components/Footer'
class Hero extends React.Component{
    render(){
        return <div>
            <DropDownMenu />
         
            <div className="container">
                <p>Lorem Ipsum is simply dummy</p>
                <button> déscouver our recipes</button>
            </div>

            <Footer/>
        </div>
    }
}
export default Hero
