import React from 'react';
import CharacterCards from './CharacterCards';
// import CharacterButton from './CharacterButton.js';
import CharacterCheckboxes from './CharacterCheckboxes.js';

// import characters from '../data.js';

// import magnify from './assets/magnify.png';
// import clearXicon from './assets/clearXicon.png';

import './Character.css';

const Character = () => {
  // console.log(characters[0]);

  return (
    <div>
      <div className='character-nav'>
        <h1 className='detail-text'>Character Details</h1>
        {/* <CharacterButton /> */}
        <CharacterCheckboxes />
      </div>
      <div>
        <CharacterCards />
      </div>
    </div>
  )
}

export default Character;