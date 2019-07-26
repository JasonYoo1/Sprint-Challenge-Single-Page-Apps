import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacter(response.data.results);
          // console.log('This is in CharacterList', response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, []);

  return <section className='character-list grid-view'>      

      {character.map(character => (
        <div>
          <CharacterCard species = {character.species} name ={character.name} origin = {character.origin.name} location = {character.location.name} status ={character.status}/>
        </div>
      ))}

    </section>

}



// {character.map(card => {
//   return <div className = "CharacterCard">
//     <h1>Character Info:</h1> <CharacterCard name = {card.name}/>