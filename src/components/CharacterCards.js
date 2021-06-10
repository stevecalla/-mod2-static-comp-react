import React from 'react';
import './CharacterCards.css';

const CharacterCards = (props) => {
    return (
      <div key={props.id}>
      <section className='character-boxes' id='characterBox'>
        <article className='character-box'>          
          <div className='tint-overlay'></div>
          <div className='image-box'>
            <img rel="preload" as='image' loading='lazy' className='container-image' src ={props.imageURL} alt='TBD'/>
          </div>
          <h1 className='name-text'>{props.name}</h1>
          <p className='description-text'>{props.description}</p>
          <a className='text url-box' href={props.profileURL} target='_blank' rel="noreferrer" aria-label='Marvel profile for {props.name}'>Profile</a>
          <a className='text url-box' href={props.comicsURL} target='_blank' rel="noreferrer" aria-label='Marvel comics for {props.name}'>Comics</a>
          <p className='count-text' aria-label='Marvel comic count for TBD'>Comic Count: {props.comicsCount}</p>
          <p className='count-text' aria-label='Marvel story count for TBD'>Stories Count: {props.storiesCount}</p>
        </article>
      </section>
      </div>
    )
  }
// }

export default CharacterCards;