import React from "react";
import axios from "axios";
import SearchBox from '../../components/Navbar/SearchBox'

import '../../Pages/Recipes/RecipeCard.scss'

class MyFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Recipies:[],
            isLoaded:false,
            searchField:''
        }
    }

  

    render () {
        const MealsId= localStorage.getItem("RecipieId")
        const MealsName= localStorage.getItem("RecipieName")
        const MealsImg= localStorage.getItem("RecipImg")
       
        
      const clear=()=>{
localStorage.clear()
      }

        return  <div>
            
            <h1> Your favorites  meal are</h1>
                    
            <div className="RecipeCard" >
                           <img className="RecipeCardImg" src={MealsImg}></img>
                            <h2> {MealsName}</h2> 
                           
                            <a className="ReadMore" onClick={() => 
                                
                                window.location.href='/RecipiDétail/'+ MealsId
                                
                                } > ...Read the recipie</a>
                                
                      
                       </div>
                   
                    <button onClick={clear}> clear</button>
            
                

            
    
   </div>
   
   
   
    }
    
}

export default MyFavorite;