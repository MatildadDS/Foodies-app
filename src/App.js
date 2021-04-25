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

function App() {
  let history = useHistory();

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
     
          <Route path="/Categories" exact component={Categories} />
    

          <Route path="/Favoris" exact component={Favoris} />
        

          <Route
            exact
            path="/recipe-details/:recipe"
            component={RecipeDetailsPage}
          ></Route>

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

        </Switch>
      </Router>
    </>
  );
}

export default App;
