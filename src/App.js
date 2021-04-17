import logo from './logo.svg';
import './App.scss'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import HomePage from './Pages/Homepage'
import Recipes from './Pages/Recipes'
import RecipiDétail from './Pages/DetailsRecipe'
import Catégories from './components/catégories'
import Areas from './components/Areas'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return(
  <Router>
  
<Switch>
<Route exact path="/" component={Hero}/>
<Route  exact path="/homePage" component={HomePage}/>
<Route  exact path="/catégories" component={Catégories}/>
<Route  exact path="/Areas" component={Areas}/>
<Route exact path="Recipises/:id" component={Recipes} />
{/* .................. */}
<Route exact path={ "/RecipiDétail/:id"
  } component={RecipiDétail}/>

</Switch>
<Footer/>
</Router>
  )
}

export default App;
