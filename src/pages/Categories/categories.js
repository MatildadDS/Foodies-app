import React, { Component } from 'react';
import axios from 'axios';

import "./styles/categories.scss";

class CategorieContent extends Component {
    constructor() {
        super()
        this.state = {
            categories: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        console.log(response);
        this.setState({ categories: response.data.categories });
    }


    render() {
        const categories = this.state.categories;

        return (
            <div>

                <h2 className="categorie-title">Find a recipe by categories</h2>
                    
                <div className="all-countries">

                    <div className="categorie-list">
                        <a href="./RecipesByCategories"><ul>{categories.map((categorie, index) =>
                            <li key={index}> {categorie.strCategory} <img src={categorie.strMealThumb} alt="#"></img></li>
                        )}</ul></a> 
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default CategorieContent;