import React, { Component } from 'react';
import CharacterCards from './CharacterCards.js';

const TestMap2 = (props) => {
  // const TestMap2 = () => {

  console.log('props=', props);

  // const cards = characters.map(character => {
  const cards = props.card.map(character => {
    return (
      <CharacterCards
        name={character.name}
        key={character.id}
        imageURL={character.imageURL}
        profileURL={character.profileURL}
        comicsURL={character.comicsURL}
        comicsCount={character.comicsCount}
        storiesCount={character.storiesCount}
        testChange={character.testChange}
      />
    )
  })

  return (
    <div className='character-boxes' id='characterBox'>
      {cards}
    </div>
  )
}

export default TestMap2;