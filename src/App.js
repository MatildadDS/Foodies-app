import "./App.scss";
import Hero from "./pages/Hero/hero";
import HomeContent from "./pages/Homepage/homepage";
import RecipesByCountries from "./pages/RecipesByCountries";
import Categories from "./pages/Categories/categories";
// import RecipesByCategories from "./pages/RecipesByCategories";
// import RecipesByIngredients from "./pages/RecipesByIngredients";
import RecipesByIngredient from "./pages/RecipesByIngredient";

// import DetailsRecipe from "./pages/DetailsRecipe";
import Favoris from "./pages/Favoris";
import { Navbar } from "./components/Navbar";
// import { HeaderRecipeDetails } from "./components/Header";
// import { RecipeDetails, RecipeCard } from "./components/Recipes";
import RecipeDetailsPage from "./Pages/DetailsRecipe";

import RecipesByCategory from "./pages/RecipesByCategory";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
// import RecipesByIngredient from "./pages/RecipesByIngredients";

// import DetailsRecipeContext from "./contexts/DetailsRecipeContext";
// const ExampleContext = React.createContext('light'); // test

function App() {
  // let history = useHistory();
  let history = useHistory();
  console.log(`history: `, history);

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/Hero" exact component={Hero} />
          <Route path="/Homepage" exact component={HomeContent} />
          <Route
            path="/RecipesByCountries"
            exact
            component={RecipesByCountries}
          />
          {/* <Route
            path="/RecipesByCategories"
            exact
            component={RecipesByCategories}
          /> */}
          <Route path="/Categories" exact component={Categories} />
          {/* <Route
            path="/RecipesByIngredients"
            exact
            component={RecipesByIngredients}
          /> */}
          {/* <Route path="/DetailsRecipes" exact component={DetailsRecipe} /> */}
          {/* <HeaderRecipeDetails/>
      <RecipeDetails/>
      <RecipeCard/> */}

          <Route path="/Favoris" exact component={Favoris} />
          {/* <Link to="/recipe-details">Recipe Details</Link> */}

          <Route
            exact
            path="/recipe-details"
            component={RecipeDetailsPage}
          ></Route>

          {/* <ExampleContext.Provider value={"hey"}> */}
          {/* <HeaderRecipeDetails />
              <RecipeDetails /> */}

          {/* {this.value} */}
          {/* </ExampleContext.Provider> */}
          <Route exact path="/category/categoryName">
            Category (this.state?)
          </Route>

          <Route
            exact
            path="/RecipesByCategory/:category"
            component={RecipesByCategory}
          ></Route>

<Route
            exact
            path="/RecipesByIngredient/:ingredient"
            component={RecipesByIngredient}
          ></Route>

          {/* <Route
            exact
            path="/RecipesByCategory"
            component={RecipesByCategory}
          ></Route> */}

          {/* <Route path="RecipesByCategory/:category" children={<RecipesByCategory />} /> */}
          {/* <Route exact path="RecipesByCategory/:category" component={RecipesByCategory} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
