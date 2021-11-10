import { searchApi } from "../../api/api";

export const SET_SEARCH_RESULT = 'SEARCH/SET_SEARCH_RESULT';
export const SET_MORE_SEARCH_RESULT = 'SEARCH/SET_MORE_SEARCH_RESULT';
export const SET_SEARCH_TEXT = 'SEARCH/SET_SEARCH_TEXT';
export const SET_SERVER_SEARCH_TEXT = 'SEARCH/SET_SERVER_SEARCH_TEXT';
export const SET_SEARCHING_ERROR = 'SEARCH/SET_SEARCHING_ERROR';
export const SET_AUTOCOMPLETE_RESULT = 'SEARCH/SET_AUTOCOMPLETE_RESULT';

//ACTION CREATORS
export const setSearchTextSuccess = (payload) => ({
    type: SET_SEARCH_TEXT, payload
});

export const setServerSearchTextSuccess = (payload) => ({
    type: SET_SERVER_SEARCH_TEXT, payload
});

export const setSearchResultSuccess = (payload) => ({
    type: SET_SEARCH_RESULT, payload
});

export const setMoreSearchResultSuccess = (payload) => ({
    type: SET_MORE_SEARCH_RESULT, payload
});

export const setSearchingError = (payload) => ({
    type: SET_SEARCHING_ERROR, payload
});

export const setAutocompleteResultSuccess = (payload) => ({
    type: SET_AUTOCOMPLETE_RESULT, payload
});


//THUNKS
export const setSearchText = (searchText) => (dispatch) => {
    dispatch(setSearchTextSuccess(searchText));
}

export const setAutocompleteResult = () => (dispatch, getState) => {
    const searchText = getState().search.searchText.trim();
    
    searchApi.getAutocompleteResult(searchText)
            .then((response) => {
                dispatch(setAutocompleteResultSuccess(response));
            });
}

export const setSearchResult = () => (dispatch, getState) => {

    const searchText = getState().search.searchText.trim(),
        serverSearchText = getState().search.serverSearchText.trim();
    
    //if true that means that client changes the text so
    //we disable 'Loading more' functionality and offset number
    //for rerendering results after submit the search
    const isMoreMode = searchText === serverSearchText;
    const offset = isMoreMode ? getState().search.results.length : 0;

    if(!searchText) { 
        return; 
    }

    searchApi.getSearchResult(searchText, offset)
    .then(response => {
        dispatch(setServerSearchTextSuccess(searchText));

        !response.totalResults 
            ? dispatch(setSearchingError('Sorry, we did not find any results for your request.'))
            : dispatch(setSearchingError(''));

        isMoreMode
            ? dispatch(setMoreSearchResultSuccess(response))
            : dispatch(setSearchResultSuccess(response));
    })
    .catch(err => {
        dispatch(setSearchingError(err));
    })
}