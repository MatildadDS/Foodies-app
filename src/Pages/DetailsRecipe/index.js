
import React from "react";

import axios from "axios";
import HeaderRecipeDetails from "../../components/Header/HeaderRecipeDetails";
import RecipeDetails from "../../components/Recipes/RecipeDetails";

import ReactPlayer from "react-player/youtube";

class RecipeDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      error: {},
      splittedRecipeInstructions: ["Instructions loading"],
    };
  }

  componentDidMount() {
    console.log(this.props.params);
    const response = axios
      .get(
        `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
      )
      .then((res) => {
        // console.log(res);

        this.setState({
          recipe: res.data.meals[0],
        });
        let splitted = this.state.recipe.strInstructions.split(".");
        this.setState({
          splittedRecipeInstructions: splitted,
        });
      });
    console.log(this.props.match.params.recipe);

    // let splitted = this.state.recipe.strInstructions.split(".");
    // console.log(res);
    // console.log(splitted);
  }

  render() {
    let recipeObj = {
      recipe: this.state.recipe,
      splittedRecipeInstructions: this.state.splittedRecipeInstructions,
    };

    return (
      <>
        <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipeObj} />
      </>
    );
  }
}
export default RecipeDetailsPage;


// import React from "react";
// import axios from "axios";
// import Footer from "../../components/Footer/footer";
// import SearchBar from "../../components/Navbar/SearchBar";
// import ReactPlayer from "react-player/youtube";
// import "./Details.scss";

// class RecipeDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       RecipeData: [],
//       isLoaded: false,
//       splittedInstructions: [],
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     axios
//       .get(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

//         // `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
//       )
//       .then((response) => {
//         // const splittedInstructions = response.data.meals[0].strInstructions.split(
//           // "."
//         // );
//         // console.log(splittedInstructions);
//         this.setState({
//           isLoaded: true,
//           RecipeData: response.data.meals[0],
//           // splittedInstructions: splittedInstructions,
//         });
//       });
//   }

//   render() {
//     console.log(this.state.RecipeData);
//     // let splittedInstructions = this.state.RecipeData.split(".");

//     //  {{this.state.RecipeData.strInstructions.split(".")
//     const meal = this.state.RecipeData;
//     var { isLoaded, RecipeData } = this.state;
//     console.log(RecipeData);
//     if (!isLoaded) {
//       return <div> Loading...</div>;
//     } else {
//       return (
//         <div>
//           <div className="DetailsContainer">
//             <div className="flexRow">
//               <div className="imgAndTitle">
//                 <h2> {meal.strMeal}</h2>
//                 <img className="DtailsImg" src={meal.strMealThumb}></img>
//               </div>
//               <div className="DetailInstractions">
//                 <h2>Instructions</h2>
//                 {/* <ul> */}
//                   {/* {this.state.RecipeData.strInstructions.split(".") */}

//        {/* { splittedInstructions.map((sentence, index)=> {

// <li key={index}>{sentence}</li>
//                   })} */}
//                   {/* {meal.map((sentence, index) => {
//                     <li key={index}>{sentence}</li>;
//                   })}
//                 </ul> */}
//               </div>
//             </div>
//             <div>
//               <ReactPlayer url={meal.strYoutube} />
//             </div>
//           </div>
//           ))
//         </div>
//       );
//     }
//   }
// }

// export default RecipeDetails;

