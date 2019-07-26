import React from 'react'
import axios from "axios"


export default function LocationCard (props) {
  // image={image}
  return (<div className='loc-card'>
  <h2>{props.name}</h2>
  {/* <p> Status: {props.species} {props.status}, Location: {props.location} , Origin: {props.origin} </p> */}
</div>)

}
