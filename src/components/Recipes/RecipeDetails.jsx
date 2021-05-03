import React from "react";
// import axios from "axios";
// import RecipeDetailsService from "../../services/recipeDetails";
// import api from "../../utils/api";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import RecipesByIngredient from "../../pages/RecipesByIngredient";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      splittedRecipeInstructions: ["Loading"],
      error: {},
      categories: {},
      test: null,
      category: "",
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        splittedRecipeInstructions: this.props.data.splittedRecipeInstructions,
      });
    }, 1000);

    // setTimeout(() => {
    //++++++++++++++++++++
    // const allCategoriesResponse = await RecipeDetailsService.getAllCategories().then(
    //   (response) => this.setState({ categories: response.data })
    // );
    // const categories = this.state.categories.categories;
    // const categoryResponse = await RecipeDetailsService.getOneCategory(
    //   "Seafood"
    // ).then((response) => this.setState({ category: response.data }));
    // const category = this.state.category;
    //++++++++++++++++++++
  }

  render() {
    const recipe = this.props.data.recipe;

    return (
      <section>
        <figure>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </figure>
        <h3>{recipe.strMeal}</h3>
        <h3>Instructions</h3>
        <ul>
          {this.state.splittedRecipeInstructions.map((sentence, index) => (
            <li key={index}>{sentence} </li>
          ))}
        </ul>
        <h3>Ingredients</h3>

        <Router>
          {Object.keys(recipe).map((keyName, index) =>
            keyName !== "" ? (
              keyName.includes("strIngredient") ? (
                keyName !== "" ? (
                  <div key={index}>
                    <Link to={`/RecipesByIngredient/${recipe[keyName]}`}>
                      {recipe[keyName]}
                    </Link>
                  </div>
                ) : null
              ) : null
            ) : null
          )}
        </Router>
        <h3>Measures</h3>

        <ul>
          {Object.keys(recipe).map((keyName, index) =>
            keyName !== "" ? (
              keyName.includes("strMeasure") ? (
                keyName !== "" ? (
                  <div key={index}>{recipe[keyName]}</div>
                ) : null
              ) : null
            ) : null
          )}
        </ul>
        <div>
          <button>Add to Favorites</button>
        </div>
      </section>
    );
  }
}


export default RecipeDetails;
