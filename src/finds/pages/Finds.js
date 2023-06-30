import React from 'react'
import FindsList from '../components/FindsList'
import place1 from '../../images/place1.jpg'
import place2 from '../../images/place2.jpg'
import place3 from '../../images/place3.jpg'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Finds() {
  
  const navigate = useNavigate();
  
  const places=[
    {
      placeId: 'p1',
      name: 'Bonneville salt flats',
      pic: place1,
      description: 'this is description for place 1',
      creator: 't1',
      address: 'Utah 84083, USA',
      location: {
        lat: 40.8045594,
        lng: -113.9654849
      }
    },
    {
      placeId: 'p2',
      name: 'Sequoia & Kings Canyon National Parks',
      pic: place2,
      description: 'this is description for place 2',
      creator: 't2',
      address: 'california, USA',
      location: {
        lat: 36.6948653,
        lng: -118.5608975
      }
    },
    {
      placeId: 'p3',
      name: 'Tegallalang Rice Terrace',
      pic: place3,
      description: 'this is description for place 3',
      creator: 't3',
      address: 'Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali 80561, Indonesias',
      location: {
        lat: -8.4317059,
        lng: 115.2767281
      }
    },
  ]

  const userId = useParams().userId;
  const loadedPlaces = places.filter(place => place.creator === userId)

  return (
    
    <>
      <h1>this is the main finds page that contains all finds by every traveler</h1>
      <FindsList items={loadedPlaces}></FindsList>
      <Button variant="contained" onClick={(event)=>{navigate("/finds/new")}}>Add new find!</Button>
    </>
  )
}

export default Finds