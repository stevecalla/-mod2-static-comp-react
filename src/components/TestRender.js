import React, { Component } from 'react';

const TestRender = (props) => {
  console.log('a=', props);
  return (
    <>
      <label>
          <input loading='lazy' type='checkbox' id='checkBox' value=''></input>
          {props.title}
        </label>
        <br></br>
      {/* <button onClick={(event) => props.testChange(event)}>🗑</button> */}
    </>
  )
}

export default TestRender;