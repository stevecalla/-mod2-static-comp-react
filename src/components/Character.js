import React from 'react';
import CharacterCards from './CharacterCards';
import CharacterButton from './CharacterButton.js';
import './Character.css';
import magnify from './assets/magnify.png';
import clearXicon from './assets/clearXicon.png';

const Character = () => {


  return (
    <div>
      <div className='character-nav'>
        <h1 className='detail-text'>Character Details</h1>
        <CharacterButton />
        {/* <div className="arrow-up hidden" id='checkboxArrow'></div> */}
        <div className="arrow-up" id='checkboxArrow'></div>
          {/* <form className='checkbox-form hidden' id='checkboxMenu'> */}
          <form className='checkbox-form' id='checkboxMenu'>
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
              <input type='checkbox' id='randomCheckbox' value='1'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>1</label>
              <br></br>
              {/* <br></br> */}
              <input type='checkbox' id='randomCheckbox' value='2'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>2</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='3'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>3</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='4'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>4</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='5'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>5</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='6'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>6</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='7'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>7</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='8'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>8</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='9'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>9</label>
              <br></br>
              <input type='checkbox' id='randomCheckbox' value='10'></input>
              <label htmlFor='randomCheckbox' id='randomNumberText'>10</label>
              <br></br>
              {/* <a id='load-more' href="#">Load 10 More</a> */}
              {/* <button onClick={foo}>Perform action</button> */}
              <button>Load 10 More</button>
            </fieldset>
            <div>
              <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
            </div>
          </form>
      </div>
      <div>
        <CharacterCards />
      </div>
    </div>
  )
}

export default Character;