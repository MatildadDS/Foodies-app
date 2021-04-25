import React from "react";
import axios from "axios";
import Footer from "../../components/Footer/footer";
import SearchBar from "../../components/Navbar/SearchBar";

import "./Details.scss";

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RecipieData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        this.setState({
          isLoaded: true,
          RecipieData: response.data,
        });
      });
  }

  render() {
    var { isLoaded, RecipieData } = this.state;
    console.log(RecipieData);
    if (!isLoaded) {
      return <div> lodding...</div>;
    } else {
      return (
        <div>
          {RecipieData.meals.map((item) => (
            <div className="DetailsContainer">
              <div className="flexRow">
                <div className="imgAndTitle">
                  <h2> {item.strMeal}</h2>
                  <img className="DtailsImg" src={item.strMealThumb}></img>
                </div>
                <div className="DetailInstractions">
                  <h2>Instructions</h2>
                  <p>{item.strInstructions}</p>
                </div>
              </div>
              <div>
                <h2> The védio of the recipe</h2>
                <video src={item.strYoutube}></video>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default RecipeDetail;
