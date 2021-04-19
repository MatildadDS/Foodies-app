import React from "react";
import axios from "axios";


import '../../../Pages/Recipes/RecipeCard.scss'

class RecipiesCatégory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Recipies:[],
            isLoaded:false
        }
    }

     componentDidMount () {
        const Category = this.props.match.params.Category;
         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`)
         .then(response=>{
            this.setState({
                isLoaded:true,
                Recipies:response.data,
            })
        })
    }

    render () {
        var{isLoaded,Recipies}=this.state;
        console.log(Recipies)
        if(!isLoaded){
            return <div> lodding...</div>
        }else{
        return  <div className="rundomContainer" >
           
            
        
        <div className="RecipeCardsContainer">
         {Recipies.meals.map(item=>(
            
                      <div className="RecipeCard" >
                            <h2> {item.strMeal}</h2> 
                            <img className="RecipeCardImg" src={item.strMealThumb}></img>
                            <a className="ReadMore" onClick={() => 
                                
                                window.location.href='/RecipiDétail/'+ item.idMeal
                                
                                } > ...Read the recipie</a>
                          
                       </div>
            
                      
     ))}
   </div>
    
   
    </div>
        }
    }
}

export default RecipiesCatégory;