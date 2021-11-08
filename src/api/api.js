import axios from "axios";


const URL = process.env.REACT_APP_API_URL,
    KEY = process.env.REACT_APP_API_KEY,
    KEY1 = process.env.REACT_APP_API_KEY1,
    KEY2 = process.env.REACT_APP_API_KEY2;

const instance = axios.create({baseURL: URL});

const getDayData = () => {
    return instance
    .get(`recipes/random?number=3&apiKey=${KEY2}`)
    .then(response => response.data.recipes);
}

const getRecommendedData = () => {
    return instance
    .get(`recipes/random?number=5&apiKey=${KEY2}`)
    .then(response => response.data.recipes);
}

const getQuickData = () => {
    return instance
    .get(`recipes/complexSearch?number=5&addRecipeInformation=true&maxReadyTime=20&apiKey=${KEY2}`)
    .then(response => response.data.results);
}

const getTriviaData = () => {
    return instance
    .get(`food/trivia/random?&apiKey=${KEY2}`)
    .then(response => response.data.text);
}

const getJokeData = () => {
    return instance
    .get(`food/jokes/random?&apiKey=${KEY2}`)
    .then(response => response.data.text);
}


export const homeApi = {getDayData, getRecommendedData, getQuickData, getTriviaData, getJokeData};

const getSearchResult = (searchText, offset) => {
    return instance
    .get(`recipes/complexSearch?query=${searchText}&number=5&offset=${offset}&addRecipeInformation=true&apiKey=${KEY}`)
    .then(response => response.data);
}

export const searchApi = {getSearchResult};

const getRecipeData = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/information?addRecipeInformation=true&apiKey=${KEY}`)
    .then(response => response.data);
}

const getRecipeCalories = (recipeId) => {
    return instance
    .get(`recipes/${recipeId}/nutritionWidget.json?apiKey=${KEY}`)
    .then(response => response.data.calories);
}

export const recipeApi = {getRecipeData, getRecipeCalories};