import api from "../utils/api";
const SearchBarService = {
  searchMealByName: async (text) => {
    // search if function params are in meal str
    return await api.get(`api/json/v1/1/search.php?s=${text}`);
  },

  searchRecipeByFirstCharacter: async (character) => {
    return await api.get(`api/json/v1/1/search.php?f=${character}`);
  },
};

export default SearchBarService;
