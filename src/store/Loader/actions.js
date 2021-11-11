export const SET_LOADER_STATUS = 'loader/SET_LOADER_STATUS';

//ACTION CREATORS
export const setLoaderStatusSuccess = () => ({type: SET_LOADER_STATUS});

//THUNKS
export const setLoaderStatus = () => (dispatch) => {
    dispatch(setLoaderStatusSuccess());
}