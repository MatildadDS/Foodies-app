import "./App.scss";
// import logo from "./logo.svg";
import Footer from "./components/Footer";
import HomePage from "./Pages/Homepage";
import Hero from "./pages/Hero/hero";
import HomeContent from "./pages/Homepage/homepage";
import RecipesByCountries from "./pages/RecipesByCountries";
import Categories from "./pages/Categories/categories";
import RecipesByIngredients from "./pages/RecipesByIngredients";
import DetailsRecipe from "./Pages/DetailsRecipe";
// import DetailsRecipe from "./pages/DetailsRecipe";
import RecipiDétail from "./Pages/DetailsRecipe";

import Favoris from "./pages/Favoris";
import { Navbar } from "./components/Navbar";
import RecipiesCatégory from "./Pages/Recipes/RecipiesByCatégory";
import RecipiesByAreas from "./Pages/Recipes/RecipiesByAreas";

import Catégories from "./components/catégories";
import MyFavorite from "./Pages/MyFavorite/MyFavorite";
import Areas from "./components/Areas";
import "./components/Buttons/Buttons.scss";
import Countries from "./pages/Countries/countries";
import RecipesByCategories from "./pages/RecipesByCategories";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Hero} />

          {/* <Route path="/Hero" exact component={Hero} /> */}
          <Route path="/Homepage" exact component={HomeContent} />
          {/* <Route  exact path="/homePage" component={HomePage}/> */}

          {/* <Route path="/RecipesByCountries" exact component={RecipesByCountries} /> */}
          <Route exact path="/Areas" component={Areas} />

          <Route
            // path="/RecipesByCountries"
            path="/RecipesByCountries"
            exact
            component={RecipesByCountries}
          />
          <Route
            path="/RecipesByCategories"
            exact
            component={RecipesByCategories}
          />
          <Route path="/Categories" exact component={Categories} />
          {/* <Route  exact path="/catégories" component={Catégories}/> */}
          <Route
            exact
            path="/Recipises/category/:Category"
            component={RecipiesCatégory}
          />
          <Route
            exact
            path="/Recipises/Area/:Area"
            component={RecipiesByAreas}
          />

          <Route exact path={"/RecipiDétail/:id"} component={RecipiDétail} />

          <Route
            path="/RecipesByIngredients"
            exact
            component={RecipesByIngredients}
          />
          <Route path="/Countries" exact component={Countries} />

          <Route
            path="/RecipesByCategories/:idMeal"
            exact
            component={RecipesByCategories}
          />
          <Route
            path="/RecipesByCountries"
            exact
            component={RecipesByCountries}
          />
          <Route
            path="/RecipesByIngredients"
            exact
            component={RecipesByIngredients}
          />
          <Route path="/DetailsRecipes" exact component={DetailsRecipe} />
          {/* <Route path="/Favoris" exact component={Favoris} /> */}
          <Route exact path="/MyFavorite" component={MyFavorite} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
