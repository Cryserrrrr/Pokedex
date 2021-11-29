/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import axios from "axios";

/**
 * Changes the input field of the form
 *
 * @param  {string} pokename The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function searchPokename(searchText, dispatch) {
  //faire la réquee de recherche
  let toArray = [];
  console.log('action', searchText)

  //tester si search text n'est pas null
  if (searchText && searchText !== "") {
      const url = `https://pokeapi.co/api/v2/pokemon/${searchText}`
      let res = null
      try {
        axios.get(url)
        .then(res => res)
        .then(res => {
          toArray.push(res.data)
          //tester la réponse et ne changer que si au moins un résultat
          if (res !== null) {
             dispatch( {
               type: "POKENAME_CHANGE",
              pokename : toArray
            });
          } 
          else {
            return {
              type: "POKENAME_CHANGE",
              pokename : null
            };
          }
        })
        .catch((error)=>{
          dispatch({
            type: "POKENAME_CHANGE",
            pokename : null
          });

        });

      } catch (e) {
        return {
          type: "POKENAME_CHANGE",
          pokename : null
        };
      }
      
    }
}
