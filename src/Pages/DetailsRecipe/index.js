import React from "react";

import Footer from "../../components/Footer/footer";
import SearchBar from "../../components/Navbar/SearchBar";

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
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    this.setState({
      recipe: response.data.meals[0],
    });
    let splitted = this.state.recipe.strInstructions.split(".");

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
        <SearchBar />

        {/* <HeaderRecipeDetails data={recipe} /> */}
        <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipe.strYoutube} />
        <Footer />
      </>
    );
  }
}
export default RecipeDetailsPage;
