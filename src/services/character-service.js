import { API_URL } from '../constants';
import { setCharacterProfile, setCharacterWorld, setCharacterMovies } from '../reducers/character/actions';

export function getCharacterProfile(id) {
  return dispatch =>
    fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setCharacterProfile(profile));
        dispatch(getCharacterWorld(profile.homeworld));
        dispatch(getCharacterMovies(profile.films));
      });
}

export function getCharacterWorld(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(world =>
        dispatch(setCharacterWorld(world))
      );
  }
}

export function getCharacterMovies(moviesUrls) {
  return dispatch =>
    Promise.all(moviesUrls.map(movieUrl =>
      fetch(movieUrl)
        .then(res => res.json())
    ))
    .then(movies =>
      dispatch(setCharacterMovies(movies))
    );
}