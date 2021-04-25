import api from "../utils/api";
const SearchBarService = {
  searchMealByName: async (text) => { // search if function params are in meal str
    return await api.get(`api/json/v1/1/search.php?s=${text}`);
  },
  // searchRecipeByFirstLetter: async (letter) => {
  //   return await api.get(`api/json/v1/1/search.php?f=${letter}`);
  // },
  searchRecipeByFirstCharacter: async (character) => {
    return await api.get(`api/json/v1/1/search.php?f=${character}`);
  },
  // searchRecipeByLetters: async (letter) => {
    // return await api.get(`api/json/v1/1/search.php?f=${letter}`);
  // },

 



//   Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a
};

export default SearchBarService;
