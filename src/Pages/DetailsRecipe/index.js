
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

  componentDidMount() {
    console.log(this.props.params);
    const response = axios
      .get(
        `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
      )
      .then((res) => {
       

        this.setState({
          recipe: res.data.meals[0],
        });
        let splitted = this.state.recipe.strInstructions.split(".");
        this.setState({
          splittedRecipeInstructions: splitted,
        });
      });
    console.log(this.props.match.params.recipe);


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
