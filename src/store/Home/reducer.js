import { SET_HOME_DATA } from "./actions";

const initialState = {
    day: [],
    recommended: [],
    quick: [],
    trivia: '',
    joke: '',
    isInitStatus: false
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_HOME_DATA: 
            return {
                ...state,
                ...action.payload,
                isInitStatus: true
            }
        default:
            return state;
    }
}

export default homeReducer;