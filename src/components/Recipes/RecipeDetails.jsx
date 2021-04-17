import React from "react";
import axios from "axios";
import RecipeDetailsService from "../../services/recipeDetails";
import api from "../../utils/api";

// e.preventDefault
class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      splittedRecipeInstructions: ["Loading"],
      error: {},
      categories: {},

      category: {},
    };

    // this.displayIngredients = this.displayIngredients.bind(this);
    // this.capitalize = this.capitalize.bind(this);
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        splittedRecipeInstructions: this.props.data.splittedRecipeInstructions,
      });
    }, 1000);

    // console.log(`recipe obj: `, this.props.data.splittedRecipeInstructions);

    // setTimeout(() => {
    const allCategoriesResponse = await RecipeDetailsService.getAllCategories().then(
      (response) => this.setState({ categories: response.data })
    );

    // const category = categoryResponse.results;
    const categories = this.state.categories.categories;

    console.log(`reponse: `, categories);

    const categoryResponse = await RecipeDetailsService.getOneCategory(
      "Seafood"
    ).then((response) => this.setState({ category: response.data }));
    const category = this.state.category;

    console.log(`category: `, category);

    // axios.get('https://api.npms.io/v2/search?q=react')
    //     .then(response => this.setState({ totalReactPackages: response.data.total }));

    // }, 2000);
  }

  // async componentDidMount() {
  //   const racesResponse = await fetch(RACES).then(res => res.json())
  //   const classesResponse = await fetch(CLASSES).then(res =>
  //   res.json())
  // const races = racesResponse.results
  // const classes = classesResponse.results
  // this.setState({ races, classes })
  // }

  render() {
    const recipe = this.props.data.recipe;
    // console.log(recipe);
    // let splittedRecipeInstructions = this.props.data.splittedRecipeInstructions;
    // let splittedRecipeInstructions = this.state.splittedRecipeInstructions;

    return (
      <section>
        <figure>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </figure>
        <h3>{recipe.strMeal}</h3>
        <h3>Instructions</h3>
        <ul>
          {this.state.splittedRecipeInstructions.map((sentence, index) => (
            <li key={index}>{sentence} </li>
          ))}
        </ul>
        <h3>Ingredients</h3>
        {Object.keys(recipe).map((keyName, index) =>
          keyName !== "" ? (
            keyName.includes("strIngredient") ? (
              keyName !== "" ? (
                <div key={index}>
                  <a href="">{recipe[keyName]}</a>
                </div>
              ) : null
            ) : null
          ) : null
        )}
        <h3>Measures</h3>

        <ul>
          {Object.keys(recipe).map((keyName, index) =>
            keyName !== "" ? (
              keyName.includes("strMeasure") ? (
                keyName !== "" ? (
                  <div key={index}>{recipe[keyName]}</div>
                ) : null
              ) : null
            ) : null
          )}
        </ul>
        <div>
          <button>Add to Favorites</button>
        </div>
      </section>
    );
  }
}

export default RecipeDetails;
