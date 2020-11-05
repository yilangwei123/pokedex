import {combineReducers} from 'redux';
import {allPokemonReducer} from './allPokemon/allPokemonReducer';
import {ActionTypes} from './actionTypes';



export interface IBaseAction {
    type: ActionTypes;
}


export const rootReducer = combineReducers({
    allPokemonReducer
})


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
