import React from "react";

import axios from "axios";
import HeaderRecipeDetails from "../../components/Header/HeaderRecipeDetails";
import RecipeDetails from "../../components/Recipes/RecipeDetails";

import ReactPlayer from "react-player/youtube";

class RecipeDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      error: {},
      splittedRecipeInstructions: ["Instructions loading"],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
    );
    this.setState({
      recipe: response.data.meals[0],
    });
    let splitted = this.state.recipe.strInstructions.split(".");
    console.log(response);
    console.log(splitted);

    this.setState({
      splittedRecipeInstructions: splitted,
    });
  }

  render() {
    let recipeObj = {
      recipe: this.state.recipe,
      splittedRecipeInstructions: this.state.splittedRecipeInstructions,
    };

    return (
      <>
        <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipeObj} />
      </>
    );
  }
}
export default RecipeDetailsPage;
