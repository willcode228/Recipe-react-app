import { searchApi } from "../../api/searchApi";

export const SEARCH_TYPES = {
    SET_SEARCH_RESULT: 'SEARCH/SET_SEARCH_RESULT',
    SET_MORE_SEARCH_RESULT: 'SEARCH/SET_MORE_SEARCH_RESULT',
    SET_SEARCH_TEXT: 'SEARCH/SET_SEARCH_TEXT',
    SET_SERVER_SEARCH_TEXT: 'SEARCH/SET_SERVER_SEARCH_TEXT',
    SET_SEARCHING_ERROR: 'SEARCH/SET_SEARCHING_ERROR',
    SET_AUTOCOMPLETE_RESULT: 'SEARCH/SET_AUTOCOMPLETE_RESULT',
    SET_LOAD_MORE_DISABLE: 'SEARCH/SET_LOAD_MORE_DISABLE'
}

//ACTION CREATORS
export const setSearchTextSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_SEARCH_TEXT, payload
});

export const setServerSearchTextSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_SERVER_SEARCH_TEXT, payload
});

export const setSearchResultSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_SEARCH_RESULT, payload
});

export const setMoreSearchResultSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_MORE_SEARCH_RESULT, payload
});

export const setSearchingError = (payload) => ({
    type: SEARCH_TYPES.SET_SEARCHING_ERROR, payload
});

export const setAutocompleteResultSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_AUTOCOMPLETE_RESULT, payload
});

export const setLoadMoreDisableSuccess = (payload) => ({
    type: SEARCH_TYPES.SET_LOAD_MORE_DISABLE, payload
})


//THUNKS
export const setSearchText = (searchText) => (dispatch) => {
    dispatch(setSearchTextSuccess(searchText));
    if(!searchText.trim()) {
        dispatch(setSearchingError(''));
    }
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

    dispatch(setLoadMoreDisableSuccess(true));
    
    searchApi.getSearchResult(searchText, offset)
    .then(response => {
        dispatch(setServerSearchTextSuccess(searchText));

        !response.totalResults 
            ? dispatch(setSearchingError('Sorry, we did not find any results for your request.'))
            : dispatch(setSearchingError(''));

        isMoreMode
            ? dispatch(setMoreSearchResultSuccess(response))
            : dispatch(setSearchResultSuccess(response));
        
        dispatch(setLoadMoreDisableSuccess(false));
    })
    .catch(err => {
        dispatch(setSearchingError(err));
    })
}