import { searchApi } from "../../api/api";

export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const SET_MORE_SEARCH_RESULT = 'SET_MORE_SEARCH_RESULT';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SERVER_SEARCH_TEXT = 'SET_SERVER_SEARCH_TEXT';
export const SET_SEARCHING_ERROR = 'SET_SEARCHING_ERROR';

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
})


//THUNKS
export const setSearchText = (searchText) => (dispatch) => {
    dispatch(setSearchTextSuccess(searchText));
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