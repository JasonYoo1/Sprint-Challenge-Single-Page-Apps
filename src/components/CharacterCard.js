import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// Created a Card to accept Character Data
export default function CharacterCard (props) {
  return (
  <div className='char-card'>
    <h2>{props.name}</h2>
    <p> Status: {props.species} {props.status}, Location: {props.location} , Origin: {props.origin} </p>
</div>)

}
