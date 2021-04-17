import React, { Component } from 'react';
import axios from 'axios';

import "./styles/recipesbycategories.scss";

class RecipesByCategories extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`);
        console.log(response);
        this.setState({ meals: response.data.recipes });
    }


    render() {
        const recipes = this.state.recipes;
        return (
            <div>

                <div className="all-recipesbycategories">
                    <h2 className="recipes-by-categorie">Find a recipe by categories</h2>

                    <div className="recipes-list">
                       <ul>{recipes.map((recipe, index) =>
                            <li key={index}> {recipe.strMeal} {recipe.strMealThumb}</li>
                        )}</ul>
                    </div>

                </div>

            </div>
        )
    }
}


export default RecipesByCategories;