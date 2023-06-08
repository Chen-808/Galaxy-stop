import React from 'react'
import { Grid } from '@mui/material'
import FindsItem from './FindsItem'

function FindsList(props) {
    if(props.items.length === 0 ){
        return(
            <div>
                No finds available yet!
            </div>
        )
    }


  return (
    <>
    <Grid 
        container
        columnSpacing={4} 
        rowSpacing={2} 
        justifyContent="center"

    >
      <h1>Finds list</h1>
      {props.items.map(place =>(
        <Grid item xs={12} sm={6} md={4}>
          <FindsItem
            key={place.placeId}
            placeId={place.placeId}
            image={place.pic}
            name={place.name}
            description={place.description}
            identifier = {place.creator}
            address={place.address}
            coordinates={place.location}/>
        </Grid>
      ))}
      </Grid>
    </>
  )
  
}

export default FindsList