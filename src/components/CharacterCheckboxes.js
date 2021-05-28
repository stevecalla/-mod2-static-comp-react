import React, { useState } from 'react';
// import CharacterButton from './CharacterButton';
import './Character.css';
import './CharacterButton.css';
import './CharacterCheckboxes.css';

import characters from '../data.js';

import magnify from './assets/magnify.png';
import clearXicon from './assets/clearXicon.png';

const CharacterCheckboxes = () => {

// variables 
let count = 0;
const populateCheckboxList = document.querySelector('#populateCheckbox');
// const selectCharacters = document.querySelector('#selectCharacters');
const renderCheckBoxArrow = document.querySelector('#checkboxArrow');
const renderCheckBoxMenu = document.querySelector('#checkboxMenu');
const getSearchBoxInput = document.querySelector('#searchInput');
const randomCheckbox = document.querySelector('#randomCheckbox');
const clearIcon = document.querySelector('#clearIcon');
const randomCheckboxWrapper = document.querySelector('#randomCheckboxWrapper');
// const loadMore = document.querySelector('#load-more');

// event listeners below
// selectCharacters.addEventListener('click', toggleCharacterMenu);
// loadMore.addEventListener('click', loadMoreCharacters);

const [ value, setValue ] = useState(true);
// const [ test200 ] = useState(false);
const [ list, setList ] = useState(['loadCharacters']);

// functions below
  function toggleCharacterMenu(event) {
    count = 0;
    // showToggle(renderCheckBoxMenu); //uses setValue below w/ inline ternary
    // showToggle(renderCheckBoxArrow); //uses setValue below w/ inline ternary
    // showToggle(randomCheckboxWrapper); //uses setValue below w/ inline ternary
    // hide(clearIcon); //uses setValue below w/ inline ternary
    setValue(prevValue => prevValue ? false : true)
    console.log(value);
    loadCharacters(event);
    // console.log('a=', list);
    // setList(prevList => createCharacterCheckboxList(prevList, 1));
    setList(prevList => value ? ['loadCharacters2'] : ['loadCharacters3'] );
    console.log('b=', list);
    // randomCheckbox.checked = false; //fix
    // randomCheckbox.checked = false; //fix
    // createCharacterCheckboxList(characters, count); //fix
    // getSearchBoxInput.value = ''; //fix
    // buttonExpandedAccessibilityToggle(); //fix
  }

  function test2() {
    return characters;
  }

  function loadCharacters(event) {
    event.preventDefault();
    count = count + 10;
    if (populateCheckboxList) {createCharacterCheckboxList(characters, count)};
  }

  function createCharacterCheckboxList(currentCharacters, count) {
    // count ++;
    // console.log(count);
    // console.log('b', count);
    let currentCharacterDropDownList = '';
    for (let i = 0; i < count; i++) {
      currentCharacterDropDownList +=
        `
        <label>
          <input loading='lazy' type='checkbox' id='checkBox' value='${currentCharacters[i]}'></input>
          ${currentCharacters[i]}
        </label>
        <br></br>
        `;
    }
    renderDropdownList(currentCharacterDropDownList);
  }

  function renderDropdownList(currentCharacterDropDownList) {
    populateCheckboxList.innerHTML = currentCharacterDropDownList;
  }

  // function buttonExpandedAccessibilityToggle() {
  //   // console.log(selectCharacters.getAttribute('aria-expanded'));
  //   if (selectCharacters.getAttribute('aria-expanded') === 'false') {
  //     selectCharacters.setAttribute('aria-expanded', 'true');
  //   } else {
  //     selectCharacters.setAttribute('aria-expanded', 'false');
  //   }
  // }

  function showToggle() {
    return value ? 'hidden' : '';
  }

  function hideToggle() {
    return value ? '' : 'hidden';
  }

  function checkedToggle() {
    console.log('test');
    console.log(randomCheckbox.value);
    console.log(randomCheckbox.checked);
    // return 'checked';
    // return value ? randomCheckbox.checked = true : randomCheckbox.checked = true;
  }

  return (
    <>
      {/* <CharacterButton /> */}
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
        <form className={`checkbox-form ${showToggle()}`} id='checkboxMenu'>
          <div className='search-bar'>
            <img className='search-icon' loading='lazy' src={magnify} alt='Search icon'/>
            <input type="text" placeholder="Search All" className="search-input" id="searchInput" spellCheck='true' title='Searchbox'></input>
            <label className='hidden' htmlFor='searchInput' aria-hidden='false'>Search box</label>
            <img className={`clear-icon ${hideToggle()}`} loading='lazy' id='clearIcon' src={clearXicon} alt='Clear icon htmlFor search box'/>
          </div>
          <fieldset className={`random-checkbox ${showToggle()}`} id='randomCheckboxWrapper'>
            <legend></legend>
            {/* <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters' checked={`random-checkbox ${checkedToggle}`}></input> */}
            {/* <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters' checked={`random-checkbox ${value ? console.log('y') : console.log('n') }`} onChange={checkedToggle}></input> */}
            <input type='checkbox' id='randomCheckbox' value='Get 8 Random Characters'></input>
            <label htmlFor='randomCheckbox' id='randomNumberText'>Get 8 Random Characters</label>
          </fieldset>
          <fieldset className='character-checkbox'>
            <legend></legend>
            <div id='populateCheckbox'></div>
            {/* <br></br> */}
            {/* <a id='load-more' href="#">Load 10 More</a> */}
            {/* <button onClick={foo}>Perform action</button> */}
            <button onClick={loadCharacters}>Load 10 More</button>
          </fieldset>
          <div>
            <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
          </div>
        </form>
    </>
  )

}

export default CharacterCheckboxes;