import React from 'react';
import './Character.css';
import './CharacterCheckboxes.css';

import characters from '../data.js';

import magnify from './assets/magnify.png';
import clearXicon from './assets/clearXicon.png';

const CharacterCheckboxes = () => {
  return (
    <>
      <div className="arrow-up" id='checkboxArrow'></div>
      {/* <div className="arrow-up hidden" id='checkboxArrow'></div> */}
        <form className='checkbox-form' id='checkboxMenu'>
        {/* <form className='checkbox-form hidden' id='checkboxMenu'> */}
          <div className='search-bar'>
            <img className='search-icon' loading='lazy' src={magnify} alt='Search icon'/>
            <input type="text" placeholder="Search All" className="search-input" id="searchInput" spellCheck='true' title='Searchbox'></input>
            <label className='hidden' htmlFor='searchInput' aria-hidden='false'>Search box</label>
            <img className='clear-icon hidden' loading='lazy' id='clearIcon' src={clearXicon} alt='Clear icon htmlFor search box'/>
          </div>
          <fieldset className='random-checkbox' id='randomCheckboxWrapper'>
            <legend></legend>
            <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters'></input>
            <label htmlFor='randomCheckbox' id='randomNumberText'>Get 8 Random Characters</label>
          </fieldset>
          <fieldset className='character-checkbox'>
            <legend></legend>
            <div id='populateCheckbox'></div>
            <input type='checkbox' id='randomCheckbox' value='{characters[0]}'></input>
            <label htmlFor='randomCheckbox' id='randomNumberText'>{characters[0]}</label>
            <br></br>
            <input type='checkbox' id='randomCheckbox' value='{characters[1]}'></input>
            <label htmlFor='randomCheckbox' id='randomNumberText'>{characters[1]}</label>
            <br></br>
            <br></br>
            {/* <a id='load-more' href="#">Load 10 More</a> */}
            {/* <button onClick={foo}>Perform action</button> */}
            <button>Load 10 More</button>
          </fieldset>
          <div>
            <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
          </div>
        </form>
    </>
  )

}

export default CharacterCheckboxes;