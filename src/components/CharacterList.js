import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function CharacterList() {
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then (res => {
      console.log(res.data.results);
      setCharacterArray (res.data.results)
    })
  }, [])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
