import React from "react";
import axios from "axios";
import "../catégories/catégories.scss";
import Rundom from "../rundomRecipie";
import SearchBox from "../Navbar/SearchBox";

import { BrowserRouter as useParams } from "react-router-dom";
import Title from "../Titles";

class Catégories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catégories: [],
      isLoaded: false,
      searchField: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        this.setState({
          isLoaded: true,
          catégories: response.data,
        });
      });
  }
  render() {
    var { isLoaded, catégories, searchField } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      console.log(catégories);
      console.log(this.state.searchField);

      return (
        <div className="catégories">
          <SearchBox
            placeholder="Search by catégory"
            handelChange={(e) =>
              this.setState({
                searchField: e.target.value,
              })
            }
          />

          <h2> Our Categories</h2>
          <div className="container">
            {catégories.categories
              .filter((item) => {
                return item.strCategory
                  .toLowerCase()
                  .includes(searchField.toLowerCase());
              })
              .map((item) => (
                <div
                  className="categories"
                  onClick={() =>
                    (window.location.href =
                      "/Recipises/category/" + item.strCategory)
                  }
                >
                  <img
                    className="catégoryImg"
                    src={item.strCategoryThumb}
                  ></img>
                  <p> Recipes of {item.strCategory}</p>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}
export default Catégories;
