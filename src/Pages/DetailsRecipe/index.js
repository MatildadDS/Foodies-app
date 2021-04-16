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
    };
  }

  //   componentWillMount() {}
  // async

  // try {
  // RecipeDetailsService.getRecipe()
  //   const response = await RecipeDetailsService.getRecipe();
  async componentDidMount() {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    this.setState({ recipe: response.data.meals[0] });
  }
  // async handling: callbacks, promises (then, catch), >>> async await <<<

  //   componentDidMount() {
  // const id = this.props.+params.id
  // try {
  //   const response = await RecipeDetailsService.getRecipe();
  //   console.log(response);
  //   this.setState({ recipe: response.data });
  // } catch (error) {
  //   this.setState({ error: "Erreur serveur" });
  // }
  //   }

  render() {
    const recipe = this.state.recipe;
    return (
      <>
        Contents of Recipe Details Page
        <HeaderRecipeDetails data={recipe} />
        <RecipeDetails data={recipe} />
        <ReactPlayer url={recipe.strYoutube} />
      </>
    );
  }
}
export default RecipeDetailsPage;
