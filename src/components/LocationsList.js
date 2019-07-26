import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard"
import { Card} from 'semantic-ui-react'

export default function LocationsList() {
    // TODO: Add useState to track data from useEffect
    const [location, setLocation] = useState([]);
  
    useEffect(() => {
      const getLocation = () => {
        axios
          .get('https://rickandmortyapi.com/api/location/')
          .then(response => {
            setLocation(response.data.results);
            //Logged for sanity check
            // console.log('This is in CharacterList', response.data.results)
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getLocation();
    }, []);
  
    return <section>      
      {/* Used map to handpick information and render onto page// */}
        {location.map(location => (
          <div>
            <Card>
              <LocationCard name ={location.name} type={location.type} dimension ={location.dimension} residents={location.residents.length}/>
              </Card>
          </div>
        ))}
  
      </section>
  
  }