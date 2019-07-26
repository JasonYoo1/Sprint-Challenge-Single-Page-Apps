import React, { useEffect, useState } from 'react';
import axios from "axios";
import EpisodeCard from './EpisodesCard'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
            setEpisode(response.data.results);
          console.log('This is in EpisodeLists', response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getEpisodes();
  }, []);

  return <section className='character-list grid-view'>      

      {episode.map(episode => (
        <div>
            <Card>
            <EpisodeCard name = {episode.name} airdate = {episode.air_date} episode= {episode.episode} characters count = {episode.characters.length}/>
            </Card>
        </div>
      ))}

    </section>

}



// {character.map(card => {
//   return <div className = "CharacterCard">
//     <h1>Character Info:</h1> <CharacterCard name = {card.name}/>