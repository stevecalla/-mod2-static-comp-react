import React, { useState } from 'react';
import './CharacterButton.css';

import magnify from './assets/magnify.png';
import clearXicon from './assets/clearXicon.png';

// const SelectCharacters = ({ handleSubmit, createCheckboxes }) => {
const CharacterSelection = (props) => {  
  console.log(props)
  
  const [ value, setValue ] = useState(true);

  function toggleCharacterMenu(event) {
    setValue(prevValue => prevValue ? false : true)
  }

  function showToggle() {
    return value ? 'hidden' : '';
  }

  function hideToggle() {
    return value ? '' : 'hidden';
  }

  // function timeOut() {
  //   setTimeout(() => {
  //     setValue(prevValue => prevValue ? false : true)
  //     console.log('Hello, World!')
  //   }, 5000);
  // }
  return (
    <>
      <button 
        className='select-characters-button' 
        id='selectCharacters' 
        aria-haspopup="true" 
        aria-expanded='false' 
        onClick={toggleCharacterMenu}
        >Character Menu 
        <span className='arrow-down-emoji'>  ▼</span>
      </button>
      <div className={`arrow-up ${showToggle()}`} id='checkboxArrow'></div>
        <form onSubmit={props.handleSubmit} className={`checkbox-form ${showToggle()}`} id='checkboxMenu'>

        <div className='search-bar'>
            <img className='search-icon' loading='lazy' src={magnify} alt='Search icon'/>
            <input type="text" placeholder="Search All" className="search-input" id="searchInput" spellCheck='true' title='Searchbox'></input>
            <label className='hidden' htmlFor='searchInput' aria-hidden='false'>Search box</label>
            <img className={`clear-icon ${hideToggle()}`} loading='lazy' id='clearIcon' src={clearXicon} alt='Clear icon htmlFor search box'/>
        </div>
        {/* <div className='search-bar'>
            <img className='search-icon' loading='lazy' src={magnify} alt='Search icon'/>
            <input type="text" placeholder="Starts With..." className="search-input" id="searchInput" spellCheck='true' title='Searchbox'></input>
            <label className='hidden' htmlFor='searchInput' aria-hidden='false'>Search box</label>
            <img className={`clear-icon ${hideToggle()}`} loading='lazy' id='clearIcon' src={clearXicon} alt='Clear icon htmlFor search box'/>
        </div> */}
          <fieldset className={`random-checkbox ${showToggle()}`} id='randomCheckboxWrapper'>
            <legend></legend>
            {/* <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters' checked={`random-checkbox ${checkedToggle}`}></input> */}
            {/* <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters' checked={`random-checkbox ${value ? console.log('y') : console.log('n') }`} onChange={checkedToggle}></input> */}
            <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters'></input>
            <label htmlFor='randomCheckbox' id='randomNumberText'>Get 8 Random Characters</label>
          </fieldset>

          <fieldset className='character-checkbox'>
            <legend></legend>
            <div id='populateCheckbox'>{props.createCheckboxes}</div>
            {/* <a onClick={props.checkboxCount} id='load-more' href="#!">Load 10 More</a> */}
            <button onClick={props.checkboxCount} id='load-more'>Load 10 More</button>
          </fieldset>
          <div>
            <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
          </div>
        </form>
    </>
  )
}

export default CharacterSelection;