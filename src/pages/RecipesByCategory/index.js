import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RecipeDetailsService from "../../services/recipeDetails";


class RecipesByCategory extends Component {
  // page?

  constructor() {
    super();

    this.state = {
      recipes: [1, 2],
      category: "",
    };

  }

  async componentDidMount() {
    const response = await RecipeDetailsService.getOneCategory(
      this.props.match.params.category
    ); // get category from url endpoint

    console.log(response);
    this.setState({
      category: this.props.match.params.category,
      recipes: response.data.meals,
    });

    console.log(this.state.recipes);
  }

  render() {
    console.log(this.props.location.pathname);
    console.log(this.props.location);
    console.log(this.props);
    console.log(this.props.match.params);


    const recipes = this.state.recipes;
    return (
      <div>
        <div className="all-recipesbycategories">
          <h2 className="recipes-by-categorie">*Category</h2>
          <div className="recipes-list">
            <ul>
              {recipes.map((recipe, index) => (
                <li key={index}>
                  {" "}
                  <Router>
                    <Link to={`/recipe-details/${recipe.strMeal}`}>
                      {recipe.strMeal}
                    </Link>
                    <Route
                      exact
                      path={`/recipe-details/${recipe.strMeal}`}
                      component={RecipesByCategory}
                    />
                  </Router>
                  {recipe.strMeal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default RecipesByCategory;
