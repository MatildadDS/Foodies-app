import React from "react";
// import axios from "axios";
// import RecipeDetailsService from "../../services/recipeDetails"

// e.preventDefault
class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      splittedRecipeInstructions: ["Loading"],
      error: {}
    };

    // let splittedRecipeInstructions = 
  
    // console.log(this.state.splittedRecipeInstructions);

    // this.displayIngredients = this.displayIngredients.bind(this);

    // this.capitalize = this.capitalize.bind(this);
  }

  // capitalize(str) {
  //   str = str[0].toUppercase;
  //   console.log(str);
  //   return str;
  // }
  // componentDidMount (

  // )


   componentDidMount() {
    // const id = this.props.match.params.id;

    this.setState({
      splittedRecipeInstructions: this.props.data.splittedRecipeInstructions
    })
    // this.setState({
    //   splittedRecipeInstructions: this.props.splittedRecipeInstructions,
    // });

   

console.log(`recipe obj: `,this.props.data.splittedRecipeInstructions);


// console.log(this.state.splittedRecipeInstructions);
    // try {
    //     const response = await articleService.getById(id);
    //     this.setState({article: response.data.article});
    // } catch (e) {
    //     this.setState({error: "Erreur serveur"});
    // }
}


// componentDidUpdate() {
//   this.setState({
//     splittedRecipeInstructions: this.props.data.splittedRecipeInstructions
//   })

// }


  render() {
    const recipe = this.props.data.recipe;
    // console.log(this.props.test);
    // const splittedRecipeInstructions = this.props.splittedRecipeInstructions
    // console.log(splittedRecipeInstructions);
    // const splittedInstructions = recipe.strInstructions
    // let res = splittedInstructions.split(" ")
    // console.log(res);

    console.log(recipe);
    // let splittedRecipeInstructions = this.props.data.splittedRecipeInstructions;
    let splittedRecipeInstructions = this.state.splittedRecipeInstructions;

    return (
      <section>
        
        <figure>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </figure>
        <h3>{recipe.strMeal}</h3>
        <p></p>

        <p>Ingredients: {recipe.strIngredient1}</p>

        <p>Instructions/Steps:</p>
        {/* <ul>{recipe.strInstructions}</ul> */}

        <ul>
          {/* {splittedInstructions.map((sentence, index) => (
            <li>{sentence[index]}</li>
          ))} */}

          {/* {this.props.data.splittedRecipeInstructions.map((sentence, index) => (
            <div key={index}>{sentence} </div>
          ))} */}

    {this.state.splittedRecipeInstructions.map((sentence, index) => (
            <div key={index}>{sentence} </div>
          ))}

        </ul>

        <p></p>

        {Object.keys(recipe).map((keyName, index) =>
          keyName !== "" ? (
            keyName.includes("strIngredient") ? (
              keyName !== "" ? (
                <span key={index}>{recipe[keyName]}</span>
              ) : null
            ) : null
          ) : null
        )}
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
// let testStr = "hey i am a test. hello hello! lol. owo";

// function convertUnformattedTextToArray(testStr) {
//   // const instructions = this.state.recipe.strInstructions
//   const instructions = testStr;

//   let result = [];

//   for (let index = 0; index < instructions.length; index++) {
//     // while (instructions[index] !== ".") {
//       result[index] = instructions[index];
//     //   index++;
//     }
//     console.log(result);
//   }

// convertUnformattedTextToArray(testStr);
// String.prototype.capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }

export default RecipeDetails;
