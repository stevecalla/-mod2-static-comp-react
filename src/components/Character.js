import React from 'react';
import './Character.css';
import CharacterCards from './CharacterCards';

const Character = () => {
  function buttonOnClick() {
    console.log('yes');
  }

  return (
    <div>
      <div className='character-nav'>
        Character Details
        <button className='character-button' onClick={buttonOnClick}>x</button>
      </div>
      <div>
        <CharacterCards />
      </div>
    </div>
  )
}

export default Character;