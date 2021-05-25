import React from 'react';
import './Header.css';
import todolist from './assets/todolist.png';
import television from './assets/television.png';
import library from './assets/library.png';

const Header = () => {
  return (
    <header className='headerbar'>
      <h1>Marvel Comics</h1>
      <div className='nav-bar'>
        <img className='todo-icon nav-icon' loading='lazy' src={todolist} width="25" height="25" alt='Icon for list of marvel characters link' />      
        <a className='nav-links' href="https://www.marvel.com/characters" target="_blank" rel="noreferrer" aria-label='Link to Marvel comic characters'>CHARACTERS</a>
        <img className='nav-icon' loading='lazy' src={library} width="25" height="25" alt='Icon for marvel comics link' />
        <a className='nav-links' href="https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12" target="_blank" rel="noreferrer" aria-label='Link to Marvel comics'>COMICS</a>
        <img className='nav-icon' loading='lazy' src={television} width="25" height="25" alt='Icon for marvel movie link'/>
        <a className='nav-links' href="https://www.marvel.com/movies" target="_blank" rel="noreferrer" aria-label='Link to Marvel comic movies'>MOVIES</a>
      </div>
    </header>
  );
}

export default Header;