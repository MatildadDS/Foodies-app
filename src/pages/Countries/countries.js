import React, { Component } from 'react';
import axios from 'axios';

import "./styles/countries.scss";

class CountriesContent extends Component {
    constructor() {
        super()
        this.state = {
            areas: [1, 2, 3],
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        //console.log(response);
        this.setState({ areas: response.data.meals });
        console.log(response.data.areas);
    }


    render() {
        const areas = this.state.areas;
        return (
            <div>

                <h2 className="country-title">Find a recipe by countries</h2>

                <div className="all-countries">

                    <div className="country-list">
                       <a href="./RecipesByCountries"><ul>{areas.map((area, index) =>
                            <li key={index}> {area.strArea} </li>
                        )}</ul></a> 
                    </div> 
                </div>

            </div>
        )
    }
}

export default CountriesContent;