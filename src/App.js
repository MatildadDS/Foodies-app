import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderRecipeDetails from "./components/Header"; //dkong
import { RecipeDetails, RecipeCard } from "./components/Recipes"; //
import RecipeDetailsPage from "./Pages/DetailsRecipe";
// import DetailsRecipeContext from "./contexts/DetailsRecipeContext";
// import React, {Component} from 'react';

// const ExampleContext = React.createContext('light'); // test

import { useHistory } from "react-router-dom";

function App() {
  // let history = useHistory();
  let history = useHistory();
  console.log(`history: `, history);

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
          <Route exact path="/recipe-details" component={RecipeDetailsPage}>
            {/* <ExampleContext.Provider value={"hey"}> */}
            {/* <HeaderRecipeDetails />
              <RecipeDetails /> */}

            {/* {this.value} */}
            {/* </ExampleContext.Provider> */}
          </Route>
          <Route exact path="/category/categoryName">
            Category (this.state?)
          </Route>
          <Route path="/">Homepage</Route>
        </Switch>
      </Router>

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* <RecipeCard /> */}
    </div>
  );
}

export default App;
