import { instance, KEY } from "./api";

const getSearchResult = (searchText, offset) => {
    return instance
    .get(`recipes/complexSearch?query=${searchText}&number=5&offset=${offset}&addRecipeInformation=true&apiKey=${KEY}`)
    .then(response => response.data);
}

const getAutocompleteResult = (searchText) => {
    return instance
    .get(`recipes/autocomplete?number=3&query=${searchText}&apiKey=${KEY}`)
    .then(response => response.data);
}

export const searchApi = {getSearchResult, getAutocompleteResult};