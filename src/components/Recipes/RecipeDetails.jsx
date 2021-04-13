import React from "react";

class RecipeDetails extends React.Component {
  render() {
    return (
      <section>
        <h3>Recipe</h3>
        <p>Description of Recipe</p>
        <ul>
          <li>Instruction / Step</li>
          <li>Instruction / Step</li>
          <li>Instruction / Step</li>
          <li>Instruction / Step</li>
          <li>Instruction / Step</li>
        </ul>
        <div>
          <figure>
            <img src="" alt="Recipe Image" />
          </figure>
          <button>Add to Favorites</button>
        </div>
      </section>
    );
  }
}

export default RecipeDetails;
