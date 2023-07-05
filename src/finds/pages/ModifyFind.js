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
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit=(data) => console.log(data)

  if (!identifiedPlace){
    return <h2>Place not found!</h2>
  }
  
    return (
        <Container maxWidth="xs">
        <h1>Modify find</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box 
            mb={2} 
            sx={{
            '& .MuiTextField-root': { m: 0.5 },
            marginTop:4
          }}>
            <TextField 
              variant="outlined" 
              label="PlaceName" 
              defaultValue = {identifiedPlace.name}
              fullWidth
              {...register("name", {required:"Name required"})}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
              
              />
            <TextField 
              variant="outlined" 
              label="Description" 
              defaultValue = {identifiedPlace.description}
              multiline
              rows={4}
              fullWidth
              {...register("description", {required:"Description required"})}
              error={!!errors?.description}
              helperText={errors?.description ? errors.description.message : null}
              />
  
            <TextField 
              variant="outlined" 
              label="Address" 
              defaultValue = {identifiedPlace.address}
              fullWidth
              {...register("address", {required:"Address required"})}
              error={!!errors?.address}
              helperText={errors?.address ? errors.address.message : null}
              
              />  
          </Box>
  
          <Button type="submit"variant="contained" color="primary" >
            Update place
          </Button>
        </form>
        
  
  
      </Container>
  )
}

export default ModifyFind