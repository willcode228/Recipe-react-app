import { instance, KEY } from "./api";

const getDayData = () => {
    return instance
    .get(`recipes/random?number=3&apiKey=${KEY}`)
    .then(response => response.data.recipes);
}

const getRecommendedData = () => {
    return instance
    .get(`recipes/random?number=5&apiKey=${KEY}`)
    .then(response => response.data.recipes);
}

const getQuickData = () => {
    return instance
    .get(`recipes/complexSearch?number=5&addRecipeInformation=true&maxReadyTime=20&apiKey=${KEY}`)
    .then(response => response.data.results);
}

const getTriviaData = () => {
    return instance
    .get(`food/trivia/random?&apiKey=${KEY}`)
    .then(response => response.data.text);
}

const getJokeData = () => {
    return instance
    .get(`food/jokes/random?&apiKey=${KEY}`)
    .then(response => response.data.text);
}

export const homeApi = {getDayData, getRecommendedData, getQuickData, getTriviaData, getJokeData};