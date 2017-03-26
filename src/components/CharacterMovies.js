import React from 'react';
import { connect } from 'react-redux';

const CharacterMovies = ({ movies }) => 
  <div id='character-movies' className='col-md-12'>
    <h1>Movies</h1>
    <table className="table table-hover">
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
          {movies.map(movie => {
              const dateArray = movie.release_date.split('-');

              return <tr key={movie.title}><td> {movie.title} ({dateArray[0]}) </td></tr>;
          })}
      </tbody>
    </table>
  </div>;

const mapStateToProps = ({ character: { movies } }) => ({
  movies
});

export default connect(mapStateToProps)(CharacterMovies);