import "./App.scss";
import Hero from "./pages/Hero/hero";
import HomeContent from "./pages/Homepage/homepage";
import RecipesByCountries from "./pages/RecipesByCountries";
import Categories from "./pages/Categories/categories";
import RecipesByIngredients from "./pages/RecipesByIngredients";

import { Navbar } from "./components/Navbar";
import RecipiesCatégory from "./Pages/Recipes/RecipiesByCatégory";
import RecipiesByAreas from "./Pages/Recipes/RecipiesByAreas";

import MyFavorite from "./Pages/MyFavorite/MyFavorite";
import Areas from "./components/Areas";
import "./components/Buttons/Buttons.scss";
import Countries from "./pages/Countries/countries";
import RecipesByCategories from "./pages/RecipesByCategories";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeDetailsPage from "./Pages/DetailsRecipe";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route
            exact
            path={"/recipe-details/:recipe"}
            component={RecipeDetailsPage}
          />

          <Route exact path="/" component={Hero} />

          <Route path="/Homepage" exact component={HomeContent} />

          <Route exact path="/Areas" component={Areas} />

          <Route
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
          <Route exact path="/MyFavorite" component={MyFavorite} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
