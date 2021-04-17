import React from "react";
import "./HeaderRecipeDetails.scss";
// import { useHistory } from "react-router-dom";

import { useHistory } from "react-router-dom";

class HeaderRecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleRedirectionToCategory = this.handleRedirectionToCategory.bind(this);
  }

  render() {
    const recipe = this.props.data.recipe;
    console.log(recipe);

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
          <a href="" onClick={undefined}>
            {recipe.strCategory}
          </a>
        </h2>
        <p>
          Tags: <a href="">{recipe.strTags}</a>
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
