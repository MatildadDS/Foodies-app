import React, { Component } from 'react';
import axios from 'axios';

import "./styles/recipesbycountries.scss";

class RecipesByCountries extends Component {
    constructor() {
        super()
        this.state = {
            countries: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        console.log(response);
        this.setState({ countries: response.data.countries });
    }


    render() {
        const countries = this.state.countries;
        return (
            <div>

                <h2 className="recipes-by-country">Find a recipe by categories</h2>

                <div className="all-recipesbycountries">

                    <div className="countries-list">
                       <ul>{countries.map((country, index) =>
                            <li key={index}> {country.strMeal} {country.strMealThumb}</li>
                        )}</ul>
                    </div>

                </div>

            </div>
        )
    }
}


export default RecipesByCountries;