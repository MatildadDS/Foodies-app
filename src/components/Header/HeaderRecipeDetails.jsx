import React from "react";
import "./HeaderRecipeDetails.scss"
class HeaderRecipeDetails extends React.Component {
  render() {
    const recipe = this.props.data;
    return (
      <header className="header-recipe-details">
        <div className="">
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.IdMeal}</p>
          <img src="" alt={recipe.area} />
        </div>
        <h2>Category: <a href="" onClick={undefined}>{recipe.strCategory}</a></h2>
        <p>Tags: {recipe.strTags}</p>
      </header>
    );
  }
}

export default HeaderRecipeDetails;
