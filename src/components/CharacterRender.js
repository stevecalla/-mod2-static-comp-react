import React from 'react';
import CharacterCards from './CharacterCards.js';

const CharacterRender = (props) => {
  // console.log('props=', props);

  // const cards = characters.map(character => {
const cards = props.card.map(character => {
    return (
      <CharacterCards
        name={character.name}
        description={character.description}
        key={character.id}
        imageURL={character.imageURL}
        imageExtension='jpg'
        profileURL={character.profileURL}
        comicsURL={character.comicsURL}
        comicsCount={character.comicsCount}
        storiesCount={character.storiesCount}
        // testChange={character.testChange}
      />
    )
  })

  return (
    <div className='character-boxes' id='characterBox'>
      {cards}
    </div>
  )
}

export default CharacterRender;