import React from 'react'
import { TextField, Box, Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
 
/*
<Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginTop:4
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          sx={{marginTop:4}}
        />
        </div>
      </Box>
*/
function NewFind() {
  return (
      
        
    <Container maxWidth="xs">
      <h1>New find</h1>
      <TextField variant="outlined" label="Name" fullWidth/>

      


    </Container>
      
      
       
  )
}

export default NewFind