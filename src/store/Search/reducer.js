import { SEARCH_TYPES } from "./actions";

const initialState = {
    results: [],
    totalResults: null,
    autocompleteResult: null,
    searchText: '',
    serverSearchText: '',
    searchingError: '',
    isLoadMoreDisable: false
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_TYPES.SET_SEARCH_RESULT:
            return {
                ...state,
                results: action.payload.results,
                totalResults: action.payload.totalResults
            }
        case SEARCH_TYPES.SET_AUTOCOMPLETE_RESULT:
            return {
                ...state,
                autocompleteResult: action.payload
            }
        case SEARCH_TYPES.SET_MORE_SEARCH_RESULT:
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                totalResults: action.payload.totalResults
            }
        case SEARCH_TYPES.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SEARCH_TYPES.SET_SERVER_SEARCH_TEXT:
            return {
                ...state,
                serverSearchText: action.payload
            }
        case SEARCH_TYPES.SET_SEARCHING_ERROR:
            return {
                ...state,
                searchingError: action.payload
            }
        case SEARCH_TYPES.SET_LOAD_MORE_DISABLE: 
            return {
                ...state,
                isLoadMoreDisable: action.payload
            }
        default: 
            return state;
    }
}

export default searchReducer;