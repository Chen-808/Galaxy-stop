import React from 'react'
import { Grid } from '@mui/material'
import FuelItem from './FuelItem'

function FuelList(props) {
    if(props.items.length === 0 ){
        return(
            <div>
                No fuel available yet!
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
      <h1>Fuel list</h1>
      {props.items.map(fuel =>(
        <Grid item xs={12} sm={6} md={4}>
          <FuelItem
            key={fuel.id}
            id={fuel.id}
            image={fuel.pic}
            name={fuel.name}/>
        </Grid>
      ))}
      </Grid>
    </>
  )
}

export default FuelList