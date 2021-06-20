import React, { Component, Suspense } from 'react';
import CheckboxRender from "./CheckboxRender";
import characters from '../data.js';
import characterList from '../dataCharacters.js';
import spin from './assets/spin.svg';
import './Character.css';
// import CharacterSelection from './CharacterSelection';
const CharacterSelection = React.lazy(() => import('./CharacterSelection.js'));
// import CharacterRender from './CharacterRender.js';
const CharacterRender = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, .01 * 1000)).then(
    () => import("./CharacterRender")
  );
});

// const Character = () => {
class Character extends Component {
  constructor() {
    super();
    this.state = {
      selectedCharacters: [],
      renderCharacters: characterList,
      num2: 4,
      searchAllInput: '',
      // searchBoxValue: "",
      checkboxes: characters.reduce(
        (options, option) => ({
          ...options,
          [option.name]: false,
        }),
        {}
      ),
    }
    // console.log(characters);
    this.characters = [];
    // this.num = 3;
    }

  // createCheckboxes = () => characterList.map(option => this.createCheckbox(option)); //list all characters
  // createCheckboxes = () => characterList.map(option => this.createCheckbox(option)); //uses static characterList; limited number of characters
  createCheckboxes = () => this.state.renderCharacters.map(option => this.createCheckbox(option)); //uses dynamic characterList... limited number of characters
  // createCheckboxes = () => characterList.filter(option => option.toUpperCase().startsWith('C')).slice(0, this.num).map(option => this.createCheckbox(option)); //starts with

  test = (option) => {
    // console.log(characterList.slice(0, 10).map(option => option.toUpperCase.startsWith('A')))
    console.log(characterList.slice(0, 10).map(option => option.toUpperCase().startsWith('A')))
    console.log(characterList.filter(option => option.toUpperCase().startsWith('C')))
  }
  
  createCheckbox = option => {
    // console.log('t=', option);
    return (
      <CheckboxRender
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
        onChange={this.handleCheckboxChange}
      />
    );
  }

  increaseCheckboxes = () => {
    // this.num = this.num + 10;
    // this.test();
    this.setState(prevState => ({
      num2: this.state.num2 + 10,
    }))
    this.createCheckboxes(this.state.num2);
  }

  handleSearchAllChange = (event) => {
    event.preventDefault();
    let searchAllList = [];

    // #1) gather input value
    const {name, value} = event.target;

    // #2) filter characterList to create a list of characters based on search input 
    searchAllList = characterList.filter(option => option.toUpperCase().includes(event.target.value.toUpperCase()));
    console.log('p=', characterList.filter(option => option.toUpperCase().includes(this.state.searchAllInput.toUpperCase())));
    // searchAllList = characterList.filter(option => option.toUpperCase().includes(this.state.searchAllInput.toUpperCase()));

    // #3) set state for the renderCharacter list based on the searchAll input, use "this..." callback function to keep checkbox list in synch
    this.setState({
      [name]: value,
      renderCharacters: searchAllList,
    }, this.changeCheckboxList)

    // #4) TODO: Display/Don't Display clear icon
    if(event.target.value === '') {
      console.log('value = blank');
    } // display x clear icon if not blank... tie x icon to resetting value to blank

    console.log('q=', searchAllList.map(option => this.createCheckbox(option)));

    // #5) TODO: Create clear icon functionality DONE see clearSearchBoxInput function
  }

  changeCheckboxList = () => {
    this.state.renderCharacters.map(option => this.createCheckbox(option));
  }

  clearSearchBoxInput = (event) => {
    console.log('clear');
    this.setState({
      searchAllInput: '',
      renderCharacters: characterList,
    });

    // this.setState({
    //   // [name]: value,
    //   renderCharacters: characterList,
    // }, this.changeCheckboxList)

    // console.log('searchAllInput=', this.state.searchAllInput);
  }

  handleCheckboxChange = (event) => {
    // const filteredCharacters = characters.filter(character => character.name === event.target.name); //todo comment out to use api
    const { name } = event.target; //todo need if using data.js

    // console.log('u=', event.target.name)
    // console.log('t=', filteredCharacters);

    // const filteredCharacters = this.getCharacterDataFromMarvelAPI(event.target.name, name); //todo un-comment to use api

    this.setState(prevState => ({
      // selectedCharacters: filteredCharacters, //todo comment out to use api
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
    
    console.log('v=', this.state.checkboxes);
  }
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log('abcv1=', this.state.selectedCharacters);
    // console.log('keys=', Object.keys(this.state.checkboxes))
    this.characters = [];
    const selectedCheckboxes = [];
    
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox] === true)
    .map(checkbox => {
      selectedCheckboxes.push(checkbox);
      console.log('selectedCheckboxes=', selectedCheckboxes);
      return selectedCheckboxes;
    });
    console.log(selectedCheckboxes);
    
    //use API
    selectedCheckboxes.map(character => this.getCharacterDataFromMarvelAPI(character))
    
    //use data.js
    // const filteredCharacters = characters.filter(character => character.name === 'Aaron Stack');
    // const filteredCharacters = characters.filter(character => character.name.includes('Aaron Stack'));
    // const filteredCharacters = characters.filter(character => selectedCheckboxes.includes(character.name));
    // console.log(filteredCharacters)

    this.setState(prevState => ({
      // selectedCharacters: filteredCharacters,
    }))
  };

  componentDidMount() {
    const randomCount = 0;
    const randomNumbers = [];
    const randomCharacters = [];

    //generate array of random numbers from index
    for (let i = 0; i < randomCount; i++) {
      // randomNumbers.push(Math.floor(Math.floor(Math.random()*characters.length))); //todo use static data
      randomNumbers.push(Math.floor(Math.floor(Math.random()*characterList.length))); //todo use api
    };
    // console.log(randomNumbers);

    //use random numbers to create array of character names
    // randomNumbers.forEach((number) => randomCharacters.push(characters[number])); //todo use static data
    randomNumbers.forEach((number) => randomCharacters.push(characterList[number])); //todo use api
    // console.log(randomCharacters);

    //submit character names to the api to get data and render
    randomCharacters.map(character => this.getCharacterDataFromMarvelAPI(character)) //todo use api

    this.setState(prevState => ({
        selectedCharacters: randomCharacters,
      }))
    // this.apiFetch(4);
    // <ApiFetch />
  }

  fetchData = () => {
    console.log('fetch');
    this.getCharacterDataFromMarvelAPI('A-Bomb (HAS)');
    this.getCharacterDataFromMarvelAPI('3-D Man');
    this.getCharacterDataFromMarvelAPI('3-D Man');
  }

  getCharacterDataFromMarvelAPI = (characterName, name) => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
        .then((response) => response.json())
        .then((character) => this.createCharacter(character, name));
  }

  createCharacter = (cards1) => {
    const cards = {
      name: cards1.data.results[0].name,
      description: cards1.data.results[0].description,
      key: cards1.data.results[0].id,
      imageURL: cards1.data.results[0].thumbnail.path,
      imageExtension: cards1.data.results[0].thumbnail.extension,
      profileURL: cards1.data.results[0].urls[0].url,
      comicsURL: cards1.data.results[0].urls[1].url,
      comicsCount: cards1.data.results[0].comics.available,
      storiesCount: cards1.data.results[0].stories.available,
    };

    const abc = this.characters.map(characters => characters.name);  //todo this should be in the handle function to avoid prevent another call on the api
    console.log(abc);
    abc.includes(cards.name) ? console.log('a') : this.characters.push(cards)
    this.setState(prevState => ({
      selectedCharacters: this.characters,
    }))
    console.log('this.state.selectedCharacters=', this.state.selectedCharacters);
  }

  render() {
    return (
      <div>
        <div className='character-nav'>
          <h1 className='detail-text'>Character Details</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <CharacterSelection 
              handleSubmit={this.handleFormSubmit}
              createCheckboxes={this.createCheckboxes()}
              checkboxCount={this.increaseCheckboxes}
              handleSearchAllChange={this.handleSearchAllChange}
              searchAllInput={this.state.searchAllInput}
              clearSearchBoxInput={this.clearSearchBoxInput}
              />
          </Suspense>
        </div>
          {/* <button onClick={this.fetchData}>FETCH</button> //test fetch button */}
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Suspense fallback=
            {
              <div className='load-icon-containter' id='loadIconContainter'>
                <img 
                  className='load-icon' 
                  id='loadIcon' 
                  loading='lazy' 
                  src={spin} 
                  alt='loading characters animation'
                ></img>
              </div>
            }>
            <CharacterRender card={this.state.selectedCharacters} />
          </Suspense>         
          {/* <img className='load-icon' id='loadIcon' loading='lazy' src={spin} width="25" height="25" alt='loading characters animation'></img> */}
      </div>
    )}
}

export default Character;