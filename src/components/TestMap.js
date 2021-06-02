import React, { Component } from 'react';
import TestRender from './TestRender.js';

import characters from '../data.js';

const TestMap = (props) => {

  console.log('testmap=', props);

  const ideaCards = props.test2.map(character => {
    return (
      <TestRender
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
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default TestMap;