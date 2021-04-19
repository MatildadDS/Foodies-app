import React, { Component } from "react";

import RecipeDetailsService from "../../services/recipeDetails";

class RecipesByIngredient extends Component {

  constructor() {
    super();

    this.state = {
      recipes: [],
      ingredient: "",
    };

  }

  async componentDidMount() {
    const response = await RecipeDetailsService.getIngredient(
      this.props.match.params.ingredient
    ); 
    console.log(this.props.match.params.ingredient);
    console.log(response);
    this.setState({
      ingredient: response,
      recipes: response.data.meals,
    });

    // console.log(this.state.recipes);
  }

  render() {
    // console.log(this.props.location.pathname);
    // console.log(this.props.location);
    // console.log(this.props);
    // console.log(this.props.match.params);

    //   console.log(this.props.location);

    const recipes = this.state.recipes;
    return (
      <div>
        <div className="all-recipesbycategories">
          <h2 className="recipes-by-categorie">Ingredient</h2>
          <div className="recipes-list">
            <ul>
              {/* {recipes.map((recipe, index) => (
                <li key={index}>
                  {recipe.strMeal} <img src={recipe.strMealThumb} alt=""></img>
                </li>
              ))}   */}

              {recipes.map((recipe, index) => (
                <li key={index}>
                  {recipe.strMeal} <img src={recipe.strMealThumb} alt=""></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipesByIngredient;
