import React from 'react'
import Catégories from '../../components/catégories'
import Title from '../../components/Titles'
import Areas from '../../components/Areas'

class HomePage extends React.Component{
   

    render(){
    
       
       
        return <div>
            <Title text="Feedies"/>
      <Catégories/>
      <Areas/>
       
        </div>
        
    }
     
}

export default HomePage