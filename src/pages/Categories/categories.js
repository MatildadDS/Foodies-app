import React, { Component } from 'react';
import axios from 'axios';


import SearchBar from "../../components/Navbar/SearchBar";
import Footer from '../../components/Footer/footer';
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

                <div className="all-categories">

                <h2 className="categorie-title">Find a recipe by categories</h2>
                    <div className="categorie-list">
                        <ul>{categories.map((categorie, index) =>
                            <li key={index}> {categorie.strCategory} </li>
                        )}</ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default CategorieContent;