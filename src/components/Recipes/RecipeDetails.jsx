import React from "react";
import axios from "axios";

// e.preventDefault
class RecipeDetails extends React.Component {
  state = {
    apiGetRes: [],
    apiRes: [],
    mealObject: {},
  };

  componentDidMount() {
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    axios
      .get("https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

      .then((response) => {
        // console.log(`+++RESULT:`, response.data.meals[0]);
        const mealObject = response.data.meals[0];
        console.log(mealObject);

        this.setState({ mealObject: mealObject });
      })

      .catch((error) => console.error(error.message)); // USELESS CODE?
  }

  render() {
    return (
      <section>
        <figure>
          <img
            src={this.state.mealObject.strMealThumb}
            alt={this.state.mealObject.strMeal}
          />
        </figure>
        <h3>{this.state.mealObject.strMeal}</h3>
        <p></p>
        <p>Instructions/Steps:</p>
        <ul>
          {this.state.mealObject.strInstructions}

        </ul>
        <div>
          <button>Add to Favorites</button>
        </div>
      </section>
    );
  }
}

export default RecipeDetails;
