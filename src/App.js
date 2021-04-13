import logo from './logo.svg';
import './App.css';
//dkong
import {HeaderRecipeDetails} from './components/Header'
import {RecipeDetails, RecipeCard} from './components/Recipes'
//
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

      <HeaderRecipeDetails/>
      <RecipeDetails/>
      ------------------------------------------------------------------------------------------------
      <RecipeCard/>
      
    </div>
  );
}

export default App;
