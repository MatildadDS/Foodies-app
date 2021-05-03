import React from "react";
import axios from "axios";
import SearchBox from "../../components/Navbar/SearchBox";
import "../../Pages/Recipes/RecipeCard.scss";
import DeleteFavorit from "../../components/Buttons/DeleteFavoritesButton";

class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recipies: [],
      isLoaded: false,
      searchField: "",
    };
  }

  render() {
    const MealsId = localStorage.getItem("RecipieId");
    const MealsName = localStorage.getItem("RecipieName");
    const MealsImg = localStorage.getItem("RecipImg");

    return (
      <div>
        <h1> Favorites meals</h1>

        <div className="RecipeCard">
          <img className="RecipeCardImg" src={MealsImg}></img>
          <h2> {MealsName}</h2>

          <a
            className="ReadMore"
            onClick={() => (window.location.href = "/RecipiDétail/" + MealsId)}
          >
            {" "}
            Read the recipe...
          </a>
          <DeleteFavorit> Delete</DeleteFavorit>
        </div>
      </div>
    );
  }
}

export default MyFavorite;
