import { SET_MORE_SEARCH_RESULT, SET_SEARCHING_ERROR, SET_SEARCH_RESULT, SET_SEARCH_TEXT, SET_SERVER_SEARCH_TEXT } from "./actions";

const initialState = {
    results: [],
    totalResults: null,
    searchText: '',
    serverSearchText: '',
    searchingError: ''
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_RESULT:
            return {
                ...state,
                results: action.payload.results,
                totalResults: action.payload.totalResults
            }
        case SET_MORE_SEARCH_RESULT:
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                totalResults: action.payload.totalResults
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SET_SERVER_SEARCH_TEXT:
            return {
                ...state,
                serverSearchText: action.payload
            }
        case SET_SEARCHING_ERROR:
            return {
                ...state,
                searchingError: action.payload
            }
        default: 
            return state;
    }
}

export default searchReducer;