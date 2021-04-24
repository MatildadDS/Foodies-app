import React from "react";
import axios from "axios";
import SearchBox from '../../../components/Navbar/SearchBox'
import '../../../Pages/Recipes/RecipeCard.scss'
import AddFavoritesButton from '../../../components/Buttons/AddFavoritesButton'

class RecipiesCatégory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Recipies:[],
            isLoaded:false,
            searchField:''
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
        var{isLoaded,Recipies,searchField}=this.state;
        console.log(Recipies)
      
      

        // returnnning sata
        if(!isLoaded){
            return <div> lodding...</div>
        }else{
         
            
        return  <div>
           <p onClick={() =>  window.location.href='/MyFavorite'}>go to MyFavorite</p>
           <SearchBox placeholder="Search the name of meal"
        handelChange={(e)=>this.setState({
     searchField:e.target.value})

   } />
        
        <div className="RecipeCardsContainer">
         {Recipies.meals.filter(
             item=>{
                 return item.strMeal.toLowerCase().includes(searchField.toLowerCase())
             }
         )
         .map(item=>(
            
            
                      <div className="RecipeCard" >
                           <img className="RecipeCardImg" src={item.strMealThumb}></img>
                            <h2> {item.strMeal}</h2> 
                           
                            <a className="ReadMore" onClick={() => 
                                
                                window.location.href='/RecipiDétail/'+ item.idMeal
                                
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

export default RecipiesCatégory;