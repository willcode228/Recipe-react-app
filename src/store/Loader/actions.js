export const SET_LOADER_STATUS = 'loader/SET_LOADER_STATUS';

//ACTION CREATORS
export const setLoaderStatusSuccess = (payload) => ({
    type: SET_LOADER_STATUS, payload
});

//THUNKS
export const setLoaderStatus = (payload) => (dispatch) => {
    dispatch(setLoaderStatusSuccess(payload));
}