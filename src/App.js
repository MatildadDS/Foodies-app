<<<<<<< HEAD
import './App.scss';
import Hero from './pages/Hero/hero';
import HomeContent from './pages/Homepage/homepage';
import RecipesByCountries from './pages/RecipesByCountries';
import Categories from './pages/Categories/categories';
import RecipesByCategories from './pages/RecipesByCategories';
import RecipesByIngredients from './pages/RecipesByIngredients';
import DetailsRecipe from './pages/DetailsRecipe';
import Favoris from './pages/Favoris';
import { Navbar } from './components/Navbar';
// Vincent
import {HeaderRecipeDetails} from './components/Header'
import {RecipeDetails, RecipeCard} from './components/Recipes'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>
          <Route path="/Hero" exact component={Hero} />
          <Route path="/Homepage" exact component={HomeContent} />
          <Route path="/RecipesByCountries" exact component={RecipesByCountries} />
          <Route path="/RecipesByCategories" exact component={RecipesByCategories} />
          <Route path="/Categories" exact component={Categories} />
          <Route path="/RecipesByIngredients" exact component={RecipesByIngredients} />
          <Route path="/DetailsRecipes" exact component={DetailsRecipe} />
          {/* <HeaderRecipeDetails/>
      <RecipeDetails/>
      <RecipeCard/> */}

          <Route path="/Favoris" exact component={Favoris} />
        </Switch>

      </Router>
    </>


=======
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderRecipeDetails  from "./components/Header"; //dkong
import { RecipeDetails, RecipeCard } from "./components/Recipes"; //

function App() {
  return (
    <div className="App">
      
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe-details">Recipe Details</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/recipe-details">
            <HeaderRecipeDetails />
            <RecipeDetails />
            {/* <RecipeDetails prop={prop} /> */}
          </Route>
          <Route path="/">CONTENTS OF Homepage</Route>
        </Switch>
      </Router>

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* <RecipeCard /> */}
    </div>
>>>>>>> api + recipe-details wip
  );
}

export default App;
