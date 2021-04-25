import React, { Component } from 'react';
import axios from 'axios';

import "./styles/recipesbycategories.scss";

class RecipesByCategories extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            categorie: "chicken"
        }
    }

    async componentDidMount() {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.categorie}`);
        console.log(response);
        this.setState({ recipes: response.data.meals });
        console.log(response);
    }


    render() {
        const recipes = this.state.recipes;
        console.log(recipes);
        return (
            <div>

                <h2 className="recipes-by-categorie">Find a recipe by categories</h2>

                <div className="all-recipesbycategories">

                    <div className="recipes-list">
                       <ul>{recipes.map((recipe, index) =>
                            <li key={index}> {recipe.strMeal}</li>
                        )}</ul>
                    </div>

                </div>

            </div>
        )
    }
}


export default RecipesByCategories;