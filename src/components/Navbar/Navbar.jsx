import SearchBar from "../../components/Navbar/SearchBar"
import logo from "../../logo.svg"
import { NavLink } from "react-router-dom";
import "./styles/Navbar.scss";

function Navbar() {


    return (
        <div className="fullnav">
            <nav>
                <NavLink exact activeClassName="current" to="/Homepage">
                    Home</NavLink>
                <NavLink exact activeClassName="current" to="/Categories">
                    Categories
                </NavLink>
<<<<<<< HEAD
                <NavLink exact activeClassName="current" to="/Areas">
                    Countries
                </NavLink>
                <NavLink exact activeClassName="current" to="/MyFavorite">
=======
                <NavLink exact activeClassName="current" to="/RecipesByCountries">
                    Countries
                </NavLink>
                <NavLink exact activeClassName="current" to="/Favoris">
>>>>>>> 565c358de7bcade55cf19e99dbe39a1ac32601e5
                    Favoris
                </NavLink>

            </nav >
            <SearchBar />
            <div className="suitenav">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
        </div>
    );
}

export default Navbar;