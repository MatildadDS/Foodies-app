import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import HomePage from './Pages/Homepage'
import Recipes from './Pages/Recipes'
import RecipiDétail from './Pages/DetailsRecipe'
import {BrowserRouteur as Router, Switch,Route} from 'react-router-dom'

function App() {
  return(
  <Router>
<Switch>
<Route exact path="/" component={Hero}/>
<Route  exact path="/homePage" component={HomePage}/>
<Route exact path="/Recipies" component={Recipes}/>
<Route axact path="/RecipiDétail" component={RecipiDétail}/>
</Switch>
</Router>
  )
}

export default App;
