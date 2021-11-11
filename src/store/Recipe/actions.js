import axios from "axios";
import { recipeApi } from "../../api/api";
import { setLoaderStatus } from "../Loader/actions";

export const SET_RECIPE_DATA = 'RECIPE/SET_RECIPE_DATA';

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
    dispatch(setLoaderStatus());

    axios.all([
        recipeApi.getRecipeData(recipeId),
        recipeApi.getRecipeCalories(recipeId)
    ])
    .then(response => {
        dispatch(setRecipeDataSuccess(response));
        dispatch(setLoaderStatus());
    })
    .catch(err => {
        console.log(err);
    });
}