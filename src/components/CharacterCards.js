import React from 'react';
import './CharacterCards.css';
// import CharacterCheckboxes from './CharacterCheckboxes';
// import TestRender from './TestRender.js';
// import TestMap2 from './TestMap2.js';

// const CharacterCards = (props) => {
class CharacterCards extends React.Component {
  constructor(props) {
    super(props);
    // console.log('yes');
    console.log('v=', props);
    this.state = {
      name: props.name,
      description: props.description,
      imageURL: props.imageURL,
      profileURL: props.profileURL,
      comicsURL: props.comicsURL,
      comicsCount: props.comicsCount,
      storiesCount: props.storiesCount,
      testChange: props.testChange
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
            <img rel="preload" as='image' loading='lazy' className='container-image' src ={this.state.imageURL} alt='TBD'/>
          </div>
          <h1 className='name-text'>{this.state.name}</h1>
          <p className='description-text'>{this.state.description}</p>
          <a className='text url-box' href={this.state.profileURL} target='_blank' rel="noreferrer" aria-label='Marvel profile for {this.state.name}'>Profile</a>
          <a className='text url-box' href={this.state.comicsURL} target='_blank' rel="noreferrer" aria-label='Marvel comics for {this.state.name}'>Comics</a>
          <p className='count-text' aria-label='Marvel comic count for TBD'>Comic Count: {this.state.comicsCount}</p>
          <p className='count-text' aria-label='Marvel story count for TBD'>Stories Count: {this.state.storiesCount}</p>
        </article>
      </section>
      </>
    )
  }
}

export default CharacterCards;