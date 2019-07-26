import React from 'react'
import axios from "axios"


export default function EpisodeCard (props) {
  // image={image}
  return (<div className='loc-card'>
  <h2>{props.name}</h2>
  <p> {props.type} Dimension: {props.dimension} Population: {props.residents}</p>
</div>)

}
