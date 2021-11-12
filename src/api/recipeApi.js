import { instance, KEY } from "./api";

const getRecipeData = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/information?addRecipeInformation=true&apiKey=${KEY}`)
    .then(response => response.data);
}

const getRecipeCalories = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/nutritionWidget.json?apiKey=${KEY}`)
    .then(response => response.data.calories);
}

export const recipeApi = {getRecipeData, getRecipeCalories};