import React, { Component } from "react";
import axios from "axios";

import RecipeDetailsService from "../../services/recipeDetails";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";
// import "./styles/recipesbycategories.scss";

class RecipesByCategory extends Component {
  // page?

  constructor() {
    super();

    this.state = {
      recipes: [1, 2],
      category: "",
    };

    // console.log(this.props.location.pathname);
  }

  async componentDidMount() {
    // const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`);
    const response = await RecipeDetailsService.getOneCategory(this.props.match.params.category); // get category from url endpoint

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

    //   console.log(this.props.location);

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
                  {recipe.strMeal} <img src={recipe.strMealThumb} alt=""></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  //   function getPageCategory() {
  //     const { category } = useParams();
  //     console.log(category);
  //   }
}

export default RecipesByCategory;
