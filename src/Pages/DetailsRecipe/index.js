// import React from "react";
// import axios from "axios";
// import Footer from "../../components/Footer/footer";
// import SearchBar from "../../components/Navbar/SearchBar";

// import ReactPlayer from "react-player/youtube";
// import "./Details.scss";

// class RecipeDetail extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       RecipieData: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     axios
//       .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      
//       // `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
//       )
//       .then((response) => {
//         this.setState({
//           isLoaded: true,
//           RecipieData: response.data,
//         });
//       });
//   }

//   render() {
//     var { isLoaded, RecipieData } = this.state;
//     console.log(RecipieData);
//     if (!isLoaded) {
//       return <div> Loading...</div>;
//     } else {
//       return (
//         <div>
//           {RecipieData.meals.map((item, index) => (
//             <div key={index} className="DetailsContainer">
//               <div className="flexRow">
//                 <div className="imgAndTitle">
//                   <h2> {item.strMeal}</h2>
//                   <img className="DtailsImg" src={item.strMealThumb}></img>
//                 </div>
//                 <div className="DetailInstractions">
//                   <h2>Instructions</h2>
//                   <ul>
//                     {item.strInstructions
//                       .split(".")
//                       .map(function (sentence, index) {
//                         <li key={index}>{sentence}</li>;
//                       })}
//                   </ul>
//                 </div>
//               </div>
//               <div>
//                 <h2> The video of the recipe</h2>
//                 <video src={item.strYoutube}></video>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }
// }

// export default RecipeDetail;







import React from "react";

import axios from "axios";
// import HeaderRecipeDetails from "../../components/Header/HeaderRecipeDetails";
// import RecipeDetails from "../../components/Recipes/RecipeDetails";

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

  async componentDidMount() {
    const response = await axios.get(
      `https://themealdb.com/api/json/v1/1/search.php?s=${this.props.match.params.recipe}`
    );
    this.setState({
      recipe: response.data.meals[0],
    });
    let splitted = this.state.recipe.strInstructions.split(".");
    console.log(response);
    console.log(splitted);

    this.setState({
      splittedRecipeInstructions: splitted,
    });
  }

  render() {
    let recipeObj = {
      recipe: this.state.recipe,
      splittedRecipeInstructions: this.state.splittedRecipeInstructions,
    };

    return (
      <>
        {/* <HeaderRecipeDetails data={recipeObj} />
        <RecipeDetails data={recipeObj} />
        <ReactPlayer url={recipeObj} /> */}
      </>
    );
  }
}
export default RecipeDetailsPage;