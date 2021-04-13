import React from "react";

// better card HTML? (instead of <div>)
class RecipeCard extends React.Component {
  render() {
    return (
      <div> 
        <img src="" alt="Card Image" />
        <div className="">
          <h2>Recipe Name</h2>
          <img src="" alt="Recipe Country (Flag)" />
          <div className=""></div>
          <p>Recipe description</p>
          <a href="">See More...</a>
          <button>Add to Favorites</button>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
