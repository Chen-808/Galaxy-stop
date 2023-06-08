import React from 'react'
import TravelerCat from './TravelerCat'
import { Grid } from '@mui/material'

function TravelersList(props) {
    if(props.items.length === 0 ){
        return(
            <div>
                No travelers have gone through this portal yet!
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
      <h1>Traveler's list</h1>
      {props.items.map(traveler =>(
        <Grid item xs={12} sm={6} md={4}>
          <TravelerCat 
            key={traveler.userId}
            userId={traveler.userId}
            image={traveler.pic}
            name={traveler.name}
            findsCount={traveler.finds}/>
        </Grid>
      ))}
      </Grid>
    </>
  )
}

export default TravelersList