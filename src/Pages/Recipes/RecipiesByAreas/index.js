import React from "react";
import axios from "axios";
import SearchBox from '../../../components/Navbar/SearchBox'
import Rundom from '../../../components/rundomRecipie'
import '../../../Pages/Recipes/RecipeCard.scss'
import AddFavoritesButton from '../../../components/Buttons/AddFavoritesButton'

class RecipiesByAreas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Recipies:[],
            isLoaded:false,
            searchField:''
        }
    }

     componentDidMount () {
        const Area = this.props.match.params.Area;
         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
         .then(response=>{
            this.setState({
                isLoaded:true,
                Recipies:response.data,
            })
        })
    }

    render () {
        var{isLoaded,Recipies,searchField}=this.state;
        console.log(Recipies)
        if(!isLoaded){
            return <div> lodding...</div>
        }else{

        return  <div>
               <SearchBox placeholder="Search the name of meal"
        handelChange={(e)=>this.setState({
     searchField:e.target.value})

   } />
        <div className="RecipeCardsContainer">
       
         {Recipies.meals.filter(
             item=>{
                 return item.strMeal.toLowerCase().includes(searchField.toLocaleLowerCase())
             }
         ).map(item=>(
            
                      <div className="RecipeCard" >
                            <img className="RecipeCardImg" src={item.strMealThumb}></img>
                            <h2>  {item.strMeal}</h2> 
                            <a className="ReadMore" onClick={() => 
                                
                                window.location.href='/recipe-details/'+ item.strMeal
                                
                                } > ...Read the recipie</a>
                            <AddFavoritesButton
                          RecipieId={item.idMeal}
                           RecipieName={item.strMeal}
                           RecipImg={item.strMealThumb}
                           />
                         
                       </div>
            
            
     ))}
    
   </div>
   
   
    </div>
        }
    }
}

export default RecipiesByAreas;