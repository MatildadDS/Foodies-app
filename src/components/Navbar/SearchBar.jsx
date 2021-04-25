import React, { useState } from "react";
import "./styles/SearchBar.scss";
import SearchBarService from "../../services/searchBar";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      error: {},
      searchText: "",
      data: {},
      meals: [0, 1],
      searchData: {},
    };
  }

  handleChange(text) {
    console.log(text);
    this.setState({
      searchText: text,
    });
    if (text === "") {
      this.setState({
        meals: [],
      });
    } else {
      const response = SearchBarService.searchMealByName(text).then((data) => {
        const meals = data.data.meals;

        let sortedMeals = null;
        {
          meals ? (sortedMeals = meals.sort()) : (sortedMeals = meals);
        }
        this.setState({
          meals: sortedMeals,
        });
        console.log(this.state.meals);
      });
    }
  }
  async componentDidMount() {}

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Seach..."
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <ul style={{ display: "block" }}>
          {!this.state.meals
            ? null
            : this.state.meals.map((meal, index) => (
                <li style={{ color: "white" }} key={index}>
                  <a href={meal.strMeal}> {meal.strMeal}</a>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}
export default SearchBar;
