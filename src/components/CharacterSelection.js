import React, { useState } from 'react';
import './CharacterButton.css';

// const SelectCharacters = ({ handleSubmit, createCheckboxes }) => {
const CharacterSelection = (props) => {  
  
  const [ value, setValue ] = useState(true);

  function toggleCharacterMenu(event) {
    setValue(prevValue => prevValue ? false : true)
  }

  function showToggle() {
    return value ? 'hidden' : '';
  }

  // function hideToggle() {
  //   return value ? '' : 'hidden';
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
        <form onSubmit={props.handleSubmit}  className={`checkbox-form ${showToggle()}`} id='checkboxMenu'>
          <fieldset className='character-checkbox'>
            <legend></legend>
            <div id='populateCheckbox'>{props.createCheckboxes}</div>
          </fieldset>
          <div>
            <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
          </div>
        </form>
    </>
  )
}

export default CharacterSelection;