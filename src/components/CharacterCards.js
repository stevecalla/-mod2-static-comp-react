import React from 'react';
import './CharacterCards.css';

const CharacterCards = () => {
  return (
    <article className='character-box'>          
      <div className='tint-overlay'></div>
      <div className='image-box'>
        <img rel="preload" as='image' loading='lazy' className='container-image' src ='http://i.imgflip.com/1bij.jpg' alt='TBD'/>
      </div>
      <h1 className='name-text'>Name</h1>
      <p className='description-text'>Description Text</p>
      {/* <a className='text url-box' href='${data[i].urls[0].url}' target='_blank' rel="noopener" aria-label='Marvel profile for ${data[i].name}'>Profile</a> */}
      {/* <a className='text url-box' href='${data[i].urls[1].url}' target='_blank' rel="noopener" aria-label='Marvel comics for ${data[i].name}'>Comics</a> */}
      {/* <p className='count-text' aria-label='Marvel comic count for ${data[i].name}'>Comic Count: ${data[i].comics.available}</p> */}
      {/* <p className='count-text' aria-label='Marvel story count for ${data[i].name}'>Stories Count: ${data[i].stories.available}</p> */}
      </article>  
  )
}

export default CharacterCards;