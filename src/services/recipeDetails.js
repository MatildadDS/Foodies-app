import api from "../utils/api";
const RecipeDetailsService = {
  getRecipe: async (recipe) => {
    return await api.get(`api/json/v1/1/search.php?s=${recipe}`);
  },

  getAllCategories: async () => {
    return await api.get(`api/json/v1/1/categories.php`);
  },
  getOneCategory: async (category) => {
    return await api.get(`api/json/v1/1/filter.php?c=${category}`);
  },
};

export default RecipeDetailsService;
