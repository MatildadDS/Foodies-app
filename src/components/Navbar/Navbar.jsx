import React, { useState } from "react";
import SearchBar from "../../components/Navbar/SearchBar"
import logo from "../../logo.svg"
import { NavLink } from "react-router-dom";
import "./styles/Navbar.scss";

function Navbar() {


    return (
        <div className="fullnav">
            <nav>
                <NavLink exact activeClassName="current" to="/Favoris">
                    Favoris</NavLink>
                <NavLink exact activeClassName="current" to="/Categories">
                    Categories
                </NavLink>
                <NavLink exact activeClassName="current" to="/RecipesByCountries">
                    Countries
                </NavLink>
                <NavLink exact activeClassName="current" to="/RecipesByIngredients">
                    Ingredients
                </NavLink>
            </nav >
            <SearchBar />
            <div className="suitenav">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Navbar;