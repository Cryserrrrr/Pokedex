import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPokedex = state => state.pokedex || initialState;

const makeSelectPokecard = () =>
  createSelector(
    selectPokedex,
    pokedexState => pokedexState.pokecard,
  );

export { selectPokedex, makeSelectPokecard };