import React from "react";
// import "./HeaderRecipeDetails.scss";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

// import RecipesByCategory from "../../pages/RecipesByCategory/";

class HeaderRecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const recipe = this.props.data.recipe;

    return (
      <header className="header-recipe-details">
        <div className="">
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.IdMeal}</p>
          <img src="" alt={recipe.area} />
        </div>
        <h2>
          Category:
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
        </h2>
        <p>
          Tags: <a href={`tags/${recipe.strTags}`}>{recipe.strTags}</a>
        </p>
      </header>
    );
  }
}

export default HeaderRecipeDetails;
