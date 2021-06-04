import React from 'react';
import './CharacterCards.css';
// import CharacterCheckboxes from './CharacterCheckboxes';
// import TestRender from './TestRender.js';
// import TestMap2 from './TestMap2.js';

// const CharacterCards = (props) => {
class CharacterCards extends React.Component {
  constructor(props) {
    super(props);
    console.log('yes');
    console.log('v=', props);
    this.state = {
      name: props.a,
    }
  }

  render () {
    return (
      <>
      {/* <div>
        {this.state.name}
      </div> */}
      <section className='character-boxes' id='characterBox'>
        <article className='character-box'>          
          <div className='tint-overlay'></div>
          <div className='image-box'>
            <img rel="preload" as='image' loading='lazy' className='container-image' src ='http://i.imgflip.com/1bij.jpg' alt='TBD'/>
          </div>
          <h1 className='name-text'>Name</h1>
          <p className='description-text'>Description Text</p>
          <a className='text url-box' href='https://www.marvel.com/movies' target='_blank' rel="noreferrer" aria-label='Marvel profile for TBD'>Profile</a>
          <a className='text url-box' href='https://www.marvel.com/movies' target='_blank' rel="noreferrer" aria-label='Marvel comics for TBD'>Comics</a>
          <p className='count-text' aria-label='Marvel comic count for TBD'>Comic Count: TBD</p>
          <p className='count-text' aria-label='Marvel story count for TBD'>Stories Count: TBD</p>
        </article>
      </section>
      </>
    )
  }
}

export default CharacterCards;