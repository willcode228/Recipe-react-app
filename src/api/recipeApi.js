import { instance } from "./api";

const getRecipeData = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/information?addRecipeInformation=true`)
    .then(response => response.data);
}

const getRecipeCalories = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/nutritionWidget.json`)
    .then(response => response.data.calories);
}

export const recipeApi = {getRecipeData, getRecipeCalories};