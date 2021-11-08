import { SET_RECIPE_DATA } from "./actions";

const initialState = {
    recipeData: {},
    calories: 0
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RECIPE_DATA: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default recipeReducer;