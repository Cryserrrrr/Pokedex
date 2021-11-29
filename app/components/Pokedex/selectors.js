/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPokedex = state => state.pokedex || initialState;

const makeSelectPokename = () =>
  createSelector(
    selectPokedex,
    pokedexState => pokedexState.pokename,
  );

export { selectPokedex, makeSelectPokename };
