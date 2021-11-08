import axios from "axios";
import { recipeApi } from "../../api/api";
export const SET_RECIPE_DATA = 'SET_RECIPE_DATA';

//ACTION CREATORS
export const setRecipeDataSuccess = (payload) => ({
    type: SET_RECIPE_DATA, 
    payload: {
        recipeData: payload[0],
        calories: payload[1]
    }
});


//THUNKS
export const setRecipeData = (recipeId) => (dispatch) => {
    axios.all([
        recipeApi.getRecipeData(recipeId),
        recipeApi.getRecipeCalories(recipeId)
    ])
    .then(response => {
        dispatch(setRecipeDataSuccess(response));
    })
    .catch(err => {
        console.log(err);
    });
}