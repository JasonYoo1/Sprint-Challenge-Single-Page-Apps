import React from 'react'
import axios from "axios"


export default function EpisodeCard (props) {
  // image={image}
  return (<div className='episode-card'>
  <h2>{props.name}</h2>
  <p> AirDate:{props.air_date} Episode: {props.episode} characters: {props.characters}</p>
</div>)

}
