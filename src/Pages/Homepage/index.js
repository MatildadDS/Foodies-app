import React from 'react'
import Catégories from '../../components/catégories'
import Rundom from '../../components/rundomRecipie'
import Title from '../../components/Titles'
import Areas from '../../components/Areas'
import Hero from '../Hero'

import SearchBox from '../../components/Navbar/SearchBox'

class HomePage extends React.Component{
   

    render(){
    
       
       
        return  <div>
            
                         <Title text="Feedies"/>
                      
           
                              <Catégories/>
                            
             <Rundom/>
     
                           <Areas/>
       
                        </div>
        
    }
     
}

export default HomePage