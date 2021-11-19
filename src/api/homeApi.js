import { instance } from "./api";

const getDayData = () => {
    return instance
    .get(`recipes/random?number=3`)
    .then(response => response.data.recipes);
}

const getRecommendedData = () => {
    return instance
    .get(`recipes/random?number=5`)
    .then(response => response.data.recipes);
}

const getQuickData = () => {
    return instance
    .get(`recipes/complexSearch?number=5&addRecipeInformation=true&maxReadyTime=20`)
    .then(response => response.data.results);
}

const getTriviaData = () => {
    return instance
    .get(`food/trivia/random`)
    .then(response => response.data.text);
}

const getJokeData = () => {
    return instance
    .get(`food/jokes/random`)
    .then(response => response.data.text);
}

export const homeApi = {getDayData, getRecommendedData, getQuickData, getTriviaData, getJokeData};