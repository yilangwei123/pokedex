import {IGetAllPokemonAction} from './allPokemonActions';
import {ActionTypes} from '../actionTypes';

export interface IPokemonBrief {
  name: string,
  url: string
}

export interface IAllPokemonState {
  allPokemon: IPokemonBrief[],
}

const initialState: IAllPokemonState = {
  allPokemon: [],
};

type TAllPokemonReducerActions = IGetAllPokemonAction;


export function allPokemonReducer(state: IAllPokemonState = initialState, action: TAllPokemonReducerActions) {
  switch (action.type) {
    case ActionTypes.GET_ALL_POKEMON:
      return { ...state, allPokemon: action.data};
    default:
      return state;
  }
}
