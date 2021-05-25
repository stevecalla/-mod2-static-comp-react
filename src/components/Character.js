import React from 'react';
import CharacterCards from './CharacterCards';
import './Character.css';

const Character = () => {
  function buttonOnClick() {
    console.log('yes');
  }

  return (
    <div>
      <div className='character-nav'>
        <h1 className='detail-text'>Character Details</h1>
        {/* <button className='character-button' onClick={buttonOnClick}>x</button> */}
        <button 
          className='select-characters' 
          id='selectCharacters' 
          aria-haspopup="true" 
          aria-expanded='false' 
          onClick={buttonOnClick}
          >Character Menu 
          <span className='arrow-down-emoji'>▼</span>
        </button>
        <div className="arrow-up hidden" id='checkboxArrow'></div>
          {/* <form className='checkbox-form hidden' id='checkboxMenu'>
            <div className='search-bar'>
              <img className='search-icon' loading='lazy' src='./assets/magnify-1.1s-200px.png' alt='Search icon'/>
              <input type="text" placeholder="Search All" className="search-input" id="searchInput" spellCheck='true' title='Searchbox'></input>
              <label className='hidden' htmlFor='searchInput' aria-hidden='false'>Search box</label>
              <img className='clear-icon hidden' loading='lazy' id='clearIcon' src='./assets/add-1.1s-200px.png' alt='Clear icon htmlFor search box'/>
            </div>
            <fieldset className='random-checkbox' id='randomCheckboxWrapper'>
              <legend></legend>
              <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>Get 8 Random Characters</label>
            </fieldset>
            <fieldset className='character-checkbox'>
              <legend></legend>
              <div id='populateCheckbox'></div>
              <a id='load-more' href="#">Load 10 More</a>
            </fieldset>
            <div>
              <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
            </div>
          </form> */}
      </div>
      <div>
        <CharacterCards />
      </div>
    </div>
  )
}

export default Character;