import React from "react";
<<<<<<< HEAD

import Footer from "../../components/Footer/footer";
import SearchBar from "../../components/Navbar/SearchBar";

=======
>>>>>>> 7eb1334f642eb602ee5721245bc02a97242fc6fb
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
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 7eb1334f642eb602ee5721245bc02a97242fc6fb
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
<<<<<<< HEAD
  }
=======
  } 
>>>>>>> 7eb1334f642eb602ee5721245bc02a97242fc6fb

  render() {
    const recipe = this.state.recipe;
    // let splittedRecipeInstructions = this.state.splittedRecipeInstructions;

    let recipeObj = {
      recipe: this.state.recipe,
      splittedRecipeInstructions: this.state.splittedRecipeInstructions,
    };

    return (
      <>
<<<<<<< HEAD
        <SearchBar />

        {/* <HeaderRecipeDetails data={recipe} /> */}
        <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipe.strYoutube} />
        <Footer />
=======
        <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipe.strYoutube} />
>>>>>>> 7eb1334f642eb602ee5721245bc02a97242fc6fb
      </>
    );
  }
}
export default RecipeDetailsPage;
