import React, { Component } from "react";

import RecipeDetailsService from "../../services/recipeDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    ).then((res) => {
      console.log(res);
      this.setState({
        recipes: res.data.meals,
      });
    });

    console.log(this.state.recipes);
  }

  render() {
    return (
      <div>
        <div className="all-recipesbycategories">
          <h2 className="recipes-by-categorie">
            ELEMENTS MAPPED BUT OUT OF PAGE BECAUSE OF CSS Ingredient:{" "}
            {this.props.match.params.ingredient}
          </h2>
          <div className="recipes-list">
            <ul>
              {this.state.recipes.map((recipe, index) => (
                <li key={index}>
                  <Router>
                    <Link to={`/recipe-details/${recipe.strMeal}`}>
                      {recipe.strMeal}
                    </Link>
                    <Route path={`/recipe-details/:recipe`} />
                  </Router>
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
