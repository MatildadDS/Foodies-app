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
    // console.log("strIngredient12".split("strIngredient")[1]);
    return (
      <section>
        <figure>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </figure>
        <h2>Category</h2>

        <Router>
          <Link to={`/RecipesByCategory/${recipe.strCategory}`}>
            {recipe.strCategory}
          </Link>
          <Route
            exact
            path="/RecipesByCategory/:category"

            // component={RecipesByCategory}
          />
        </Router>
        <h3>Tags</h3>
        <p>
          <a href={`tags/${recipe.strTags}`}>{recipe.strTags}</a>
        </p>

        <h3>Ingredients</h3>
        <div className="ingredients-container">
          <ul className="ingredients-list">
            <Router>
              {Object.keys(recipe).map((keyName, index) =>
                keyName.includes("strIngredient") ? (
                  keyName !== "" ? (
                    <span key={index}>
                      <Link to={`/RecipesByIngredient/${recipe[keyName]}`}>
                        {recipe[keyName]}
                      </Link>
                    </span>
                  ) : null
                ) : null
              )}
            </Router>
          </ul>
          <ul>
            {/* {Object.keys(recipe).map((keyName, index) =>
              keyName !== "" ? (
                keyName.includes("strMeasure") ? (
                  keyName !== "" ? (
                    <div key={index}>{recipe[keyName]}</div>
                  ) : null
                ) : null
              ) : null
            )} */}
          </ul>
        </div>

        <h3>Instructions</h3>
        <ul>
          {this.state.splittedRecipeInstructions.map((sentence, index) => (
            <li key={index}>{sentence} </li>
          ))}
        </ul>

        {/* <div>
          <button>Add to Favorites</button>
        </div> */}
      </section>
    );
  }
}

export default RecipeDetails;
