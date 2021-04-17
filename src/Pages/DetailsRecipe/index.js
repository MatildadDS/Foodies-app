import React from "react";
import axios from "axios";
import HeaderRecipeDetails from "../../components/Header/HeaderRecipeDetails";
import RecipeDetails from "../../components/Recipes/RecipeDetails";
import RecipeDetailsService from "../../services/recipeDetails";

import ReactPlayer from "react-player/youtube";

class RecipeDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      error: {},
      splittedRecipeInstructions: ["Instructions loading"],
    }
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    this.setState({
      recipe: response.data.meals[0],
    });
    let splitted = this.state.recipe.strInstructions.split(".");
    // let splitted = ["test"];

    this.setState({
      splittedRecipeInstructions: splitted,
    });
  } 

  render() {
    const recipe = this.state.recipe;
    // let splittedRecipeInstructions = this.state.splittedRecipeInstructions;

    let recipeObj = {
      recipe: this.state.recipe,
      splittedRecipeInstructions: this.state.splittedRecipeInstructions,
    };

    return (
      <>
        <HeaderRecipeDetails data={recipe} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipe.strYoutube} />
      </>
    );
  }
}
export default RecipeDetailsPage;
