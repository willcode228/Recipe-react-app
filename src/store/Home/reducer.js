const initialState = {
    day: [],
    recommended: [],
    random: [],
    trivia: '',
    joke: ''
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default homeReducer;