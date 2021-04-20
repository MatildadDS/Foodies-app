import React from 'react'
import Catégories from '../../components/catégories'
import Rundom from '../../components/rundomRecipie'
import Title from '../../components/Titles'
import Areas from '../../components/Areas'
import Hero from '../Hero'
import '../../Pages/Homepage/HomePage.scss'

class HomePage extends React.Component{
   

    render(){
    
       
       
        return <div>
            <Title text="Feedies"/>
            <div className="flex">
           
      <Catégories/>
      <Rundom/>
      </div>
     
      <Areas/>
       
        </div>
        
    }
     
}

export default HomePage