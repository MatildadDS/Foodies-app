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
          <Route path="/Favoris" exact component={Favoris} />
        </Switch>

      </Router>
    </>


  );
}

export default App;
