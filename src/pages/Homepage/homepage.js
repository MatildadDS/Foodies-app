import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from "../../components/Navbar/SearchBar"
import Footer from '../../components/Footer/footer';
import "./styles/homepage.scss";
import CategorieContent from '../Categories/categories';


class HomeContent extends Component {
    constructor() {
        super()
        this.state = {
            randomMeal: {},
        }
        this.loadContent();

    }

    loadContent() {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                console.log(response);
                const randomMeal = response.data.meals[0];
                this.setState({ randomMeal });
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div>
                <div className="homepage-container">

                    <div className="categorie-container">

                        <div className="categories-list">
                            <CategorieContent />
                        </div>
                    </div>

                    <div className="random-container">

                        <h2 className="random-title">Need an idea?</h2>

                        <div className="random-recipe">
                            <figure className="pic-recipe">
                                <img src={this.state.randomMeal.strMealThumb} alt="" />
                                <figcaption>
                                </figcaption>
                            </figure>

                            <div className="details">
                                <h3>{this.state.randomMeal.strMeal} </h3>
                                <h4>{this.state.randomMeal.strInstructions}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default HomeContent;

