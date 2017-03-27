import React from 'react';
import { connect } from 'react-redux';
import { getCharacterProfile } from '../services/character-service';
import { setCurrentCharacter } from '../reducers/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  <div id="character-list" className="col-md-12">
    <h1>Characters</h1>
    <ul className="nav nav-pills nav-stacked">
    {characters.map((c, i) =>
      <li 
        role="presentation"
        style={{cursor: "pointer"}}
        onClick={setCharacter(i + 1)}
        key={c.name}
      >
        {c.name}
      </li>
    )}
    </ul>
  </div>;

const mapStateToProps = ({ characters }) => ({
  characters
});

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
