import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'
import { Card, Image } from 'semantic-ui-react'

export default function CharacterList() {
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
  {/* Used map to handpick information and render onto page// */}
      {character.map(character => (
        <div>
           <Card>
           <Image src={character.image} wrapped ui={false} />
          <CharacterCard species = {character.species} name ={character.name} origin = {character.origin.name} location = {character.location.name} status ={character.status}/>
          </Card>
        </div>
      ))}

    </section>

}



// {character.map(card => {
//   return <div className = "CharacterCard">
//     <h1>Character Info:</h1> <CharacterCard name = {card.name}/>