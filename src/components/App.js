import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';
import CharacterMovies from './CharacterMovies';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <CharacterList></CharacterList>
        </div>
        <div className="col-md-6">
          <CharacterProfile></CharacterProfile>
          <CharacterWorld></CharacterWorld>
          <CharacterMovies></CharacterMovies>
        </div>
      </div>
    </div>
  )
}

export default App;