/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';


// The initial state of the App
export const initialState = {
  pokemame: null,
  pokecard: null,
  loading: false
};

/* eslint-disable default-case, no-param-reassign */
const pokedexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "POKENAME_CHANGE":
        draft.pokename = action.pokename;

      break;
      case "START_SEARCH":
        draft.loading = true;
        break;
      case "POKECARD":
        console.log('reducer', action.pokecard)
        draft.pokecard = action.pokecard;
        draft.loading = false;
      break;
    }
  });

export default pokedexReducer;
