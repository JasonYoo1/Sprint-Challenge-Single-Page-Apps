import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacter(response.data.results);
          console.log('This is in CharacterList', response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, []);

  return <section className='character-list grid-view'>      
      {/* <div className="movie-director">
        Director: 
      </div>
      <div className="movie-metascore">
        Metascore: 
      </div>
      <h3>Actors</h3> */}

      {character.map(character => (
        <div>
          <h1>{character.name}, {character.status}</h1>
          {/* <CharacterCard name ={character.name}/> */}
        </div>
      ))}

    </section>

}



// {character.map(card => {
//   return <div className = "CharacterCard">
//     <h1>Character Info:</h1> <CharacterCard name = {card.name}/>