import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import homeReducer from './Home/reducer';
import searchReducer from './Search/reducer';
import recipeReducer from './Recipe/reducer';
import loaderReducer from './Loader/reducer';

const reducers = combineReducers({
    home: homeReducer,
    search: searchReducer,
    recipe: recipeReducer,
    loader: loaderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
