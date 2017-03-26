import React from 'react';
import { connect } from 'react-redux';

const CharacterProfile = ({ profile, world, i }) => 
  <div id='character-profile' className='col-md-12'>
    <h1>Profile</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>World</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{profile.name && <p>{profile.name}</p>}</td>
          <td>{profile.height && <p>{profile.height}cm</p>}</td>
          <td>{profile.mass && <p>{profile.mass}kg</p>}</td>
          <td>{world.name && <p>{world.name}</p>}</td>
          <td>{profile.gender && <p>{profile.gender}</p>}</td>
        </tr>
      </tbody>
    </table>
  </div>;

const mapStateToProps = ({ character: { profile, world } }) => ({
  profile,
  world
});

export default connect(mapStateToProps)(CharacterProfile);