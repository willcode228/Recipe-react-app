import { SET_LOADER_STATUS } from "./actions";

const initialState = {
    isFetching: false
}

const loaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADER_STATUS: 
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state;
    }
}

export default loaderReducer;