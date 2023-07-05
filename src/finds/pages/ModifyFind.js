import React from 'react'
import { useParams } from 'react-router-dom'
import { TextField, Box, Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'

import place1 from '../../images/place1.jpg'
import place2 from '../../images/place2.jpg'
import place3 from '../../images/place3.jpg'

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

function ModifyFind() {
    const placeId = useParams().placeId
    const identifiedPlace = places.find(p => p.placeId=== placeId)
  if (!identifiedPlace){
    return <h2>Place not found!</h2>
  }
  
    return (
    <div>ModifyFind</div>
  )
}

export default ModifyFind