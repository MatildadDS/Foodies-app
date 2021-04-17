import React from "react";
import axios from "axios";



class RecipeDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RecipieData:[],
            isLoaded:false
        }
    }

     componentDidMount () {
        const id = this.props.match.params.id;
         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         .then(response=>{
            this.setState({
                isLoaded:true,
                RecipieData:response.data,
            })
        })
    }

    render () {
        var{isLoaded,RecipieData}=this.state;
        console.log(RecipieData)
        if(!isLoaded){
            return <div> lodding...</div>
        }else{
        return (
            <div className="rundomContainer" >
           
            
            
            <div className="rundomCard">
             {RecipieData.meals.map(item=>(
                
                          <div className="RundomRecipie" >
                                <h2> {item.strMeal}</h2> 
                                <img  src={item.strMealThumb}></img>
                                <p >{item.strInstructions}</p>
                           </div>
                
                          
         ))}
       </div>
        
       
        </div>
        )
        }
    }
}

export default RecipeDetail;
