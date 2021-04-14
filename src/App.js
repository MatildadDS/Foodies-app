import logo from './logo.svg';
import './App.scss';
import { DropDownMenu } from './components/Navbar';
import { SearchBar } from './components/Navbar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DropDownMenu /> 
      <SearchBar /> 

      <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"> 
          </a>
          <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      

    </div>
  );
}

export default App;
