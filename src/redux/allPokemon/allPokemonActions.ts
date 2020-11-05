import { IBaseAction } from '../rootReducer';
import { IPokemonBrief } from './allPokemonReducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import {ActionTypes} from '../actionTypes';

export interface IGetAllPokemonAction extends IBaseAction {
  type: ActionTypes.GET_ALL_POKEMON;
  data: IPokemonBrief[];
}

export function getAllPokemon(): ThunkAction<
  Promise<IGetAllPokemonAction>,
  IPokemonBrief,
  undefined,
  IGetAllPokemonAction
> {
  return async (
    dispatch: ThunkDispatch<IPokemonBrief, undefined, IGetAllPokemonAction>
  ) => {
    try {
      const res0 = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const maxCount = res0.data.count;
      const res1 = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=' + maxCount);
      return dispatch({
        type: ActionTypes.GET_ALL_POKEMON,
        data: res1.data.results,
      });
    } catch (err) {
      console.error(err.message);
    }

    return dispatch({
      type: ActionTypes.GET_ALL_POKEMON,
      data: [],
    });
  };
}
