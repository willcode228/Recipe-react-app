import axios from "axios";
import { homeApi } from "../../api/api";

export const SET_HOME_DATA = 'HOME/SET_HOME_DATA';


//ACTION CREATORS
export const setHomeDataSuccess = (payload) => ({
    type: SET_HOME_DATA, 
    payload: {
        recommended: payload[0],
        quick: payload[1],
        day: payload[2],
        trivia: payload[3],
        joke: payload[4],
    }
});


//THUNKS
export const setHomeData = () => (dispatch) => {
    axios.all([
        homeApi.getRecommendedData(),
        homeApi.getQuickData(),
        homeApi.getDayData(),
        homeApi.getTriviaData(),
        homeApi.getJokeData(),
    ])
    .then(response => {
        dispatch(setHomeDataSuccess(response));
    })
    .catch(err => {
        console.error(err);
    })
}

