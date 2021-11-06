import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import homeReducer from './Home/reducer';
import searchReducer from './Search/reducer';

const reducers = combineReducers({
    home: homeReducer,
    search: searchReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
