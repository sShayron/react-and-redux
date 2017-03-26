import React from 'react';
import { connect } from 'react-redux';

const isKnown = text => text && text !== 'unknown';

const CharacterWorld = ({ world }) =>
  <div id='character-world' className='col-md-12'>
    <h1>World</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Diameter</th>
          <th>Day length</th>
          <th>Year length</th>
          <th>Climate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{isKnown(world.name) && <p> {world.name}</p>}</td>
          <td>{isKnown(world.population) && <p> {world.population}</p>}</td>
          <td>{isKnown(world.diameter) && <p> {world.diameter}km</p>}</td>
          <td>{isKnown(world.rotation_period) && <p> {world.rotation_period} hours</p>}</td>
          <td>{isKnown(world.orbital_period) && <p> {world.orbital_period} days</p>}</td>
          <td>{isKnown(world.climate) && <p> {world.climate}</p>}</td>
        </tr>
      </tbody>
    </table>
  </div>;

const mapStateToProps = ({ character: { world } }) => ({
  world,
});

export default connect(mapStateToProps)(CharacterWorld);