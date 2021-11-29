import axios from "axios";

/**
 * Changes the input field of the form
 *
 * @param  {string} pokename The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function SearchPokecard(click, dispatch) {

  let toArray = [];
  dispatch({ type: "START_SEARCH" });
    const url = `https://pokeapi.co/api/v2/pokemon/${click}`
    let res = null
    try {
      axios.get(url)
      .then(res => res)
      .then(res => {
        toArray.push(res.data)
            dispatch( {
              type: "POKECARD",
            pokecard : toArray
          }); 
      })
    } 
    catch (e) {
      dispatch( {
        type: "POKECARD",
        pokecard : null
      });
    }
      
}
