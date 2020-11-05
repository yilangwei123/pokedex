import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const middleware = [thunk];

const initState = {};

export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(...middleware)));
