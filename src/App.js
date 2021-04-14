import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderRecipeDetails  from "./components/Header"; //dkong
import { RecipeDetails, RecipeCard } from "./components/Recipes"; //

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
  );
}

export default App;
