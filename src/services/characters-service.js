import { API_URL } from '../constants';
import { setCharacters } from '../reducers/characters/actions';

export function getCharacters() {
  return dispatch => {
    fetch(`${API_URL}/people`)
    .then(res => res.json())
    .then(res => res.results)
    .then(characters => {
      dispatch(setCharacters(characters));
    });
  };
}
