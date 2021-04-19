import React from "react";
import "./HeaderRecipeDetails.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import RecipesByCategories from "./pages/RecipesByCategories";
// import RecipesByCategories from "../../pages/RecipesByCategories/";
import RecipesByCategory from "../../pages/RecipesByCategory/";


class HeaderRecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleRedirectionToCategory = this.handleRedirectionToCategory.bind(this);

    // this.props.history.push({
    //   pathname: `category/test`,
    //     state: this.state.recipe.strCategory,
    // })
  }

  render() {
    const recipe = this.props.data.recipe;
    // console.log(recipe);

    // function handleClick() {
    //   history.push(`/category${this.props.data.recipe}`);
    // }

    return (
      <header className="header-recipe-details">
        <div className="">
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.IdMeal}</p>
          <img src="" alt={recipe.area} />
        </div>
        <h2>
          Category:{" "}
          {/* <a href="" onClick={() => this.handleRedirectionToCategory()}> */}
          {/* <a href="" onClick={history.push(`category/${this.props.data.recipe}`)}> */}
          {/* <Link
            to={{
              pathname: `category/${recipe.strCategory}`,
              state: recipe.strCategory
            }}
          >
            {recipe.strCategory}
          </Link> */}
          <Router>
            <Link to={`RecipesByCategory`}>{recipe.strCategory}</Link>
            {/* <Link to={`category/${recipe.strCategory}`}>{recipe.strCategory}</Link> */}
            <Route
              path="/RecipesByCategory/:category"
              exact
              component={RecipesByCategory}
            />
          </Router>
          {/* <Link
            to={{ pathname: `/cards/${id}`, state: id }}
            className={`card-wrapper restore-${id}`}
          >
            {cardData[id].name}
          </Link> */}
          {/* <a href={`category/${recipe.strCategory}`} onClick={undefined}>
              {recipe.strCategory}
            </a> */}
        </h2>
        <p>
          Tags: <a href={`tags/${recipe.strTags}`}>{recipe.strTags}</a>
        </p>
      </header>
    );
  }

  // handleRedirectionToCategory(e) {
  //   e.preventDefault();

  //   console.log(`redirecting to${this.props.data.recipe}`);
  // }
}

export default HeaderRecipeDetails;
