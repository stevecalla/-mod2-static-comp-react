import React, { Component } from 'react';
import TestRender from './TestRender.js';

import characters from '../data.js';

const TestMap = (props) => {

  console.log('testmap=', props);

  const ideaCards = props.test2.map(idea => {
    return (
      <TestRender
        title={idea.name}
        key={idea.id}
        testChange={idea.testChange}
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