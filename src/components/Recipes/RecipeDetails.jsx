import React from "react";
// import axios from "axios";
// import RecipeDetailsService from "../../services/recipeDetails"

// e.preventDefault
class RecipeDetails extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
  }

  
  
  // constructor(
  // props) {
  //   data : {
  //     strMeal : ''
  //   }
  // };
  

  // componentDidMount() {
  //   // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
  //   // axios
  //   //   .get("https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    
  //   RecipeDetailsService.getRecipe()
  //     .then((response) => {
  //       console.log(`+++RESULT:`, response.data.meals[0]);
  //       const recipe = response.data.meals[0];
  //       console.log(recipe);

  //       this.setState({ recipe: recipe });
  //     })

  //     .catch((error) => console.error(error.message)); // USELESS CODE?


  // }

  render() {
    // console.log(this.props.data);
    console.log(this.props);
    const recipe = this.props.data;
    return (
      <section>
        <figure>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </figure>
        <h3>{recipe.strMeal}</h3>
        <p></p>
        <p>Instructions/Steps:</p>
        <ul>
          {recipe.strInstructions}

        </ul>
          
        {Object.keys(recipe).map((keyName, i) => (
    <li key={i}>
        <span> key: {i} Contents: {recipe[keyName]}</span>
    </li>
))}
          
          
        <div>
          <button>Add to Favorites</button>
        </div>
      </section>
    );
  }
}

export default RecipeDetails;
