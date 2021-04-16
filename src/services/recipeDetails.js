import api from "../utils/api";
const RecipeDetailsService = {
  getRecipe: async () => {
    return await api.get(
      "api/json/v1/1/search.php?s=Arrabiata"
      
    );
  },
};

export default RecipeDetailsService;
