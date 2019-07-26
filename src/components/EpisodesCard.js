import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function EpisodeCard (props) {
  return (<div className='episode-card'>
  <h2>{props.name}</h2>
  <p> AirDate:{props.air_date} Episode: {props.episode} characters: {props.characters}</p>
</div>)

}
