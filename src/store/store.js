import menuReducer from './menuReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    menu: menuReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;