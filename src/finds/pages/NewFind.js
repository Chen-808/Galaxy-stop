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
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit=(data) => console.log(data)

  return (
    <Container maxWidth="xs">
      <h1>New find</h1>
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
            fullWidth
            {...register("name", {required:"Name required"})}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
            
            />
          <TextField 
            variant="outlined" 
            label="Description" 
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
            fullWidth
            {...register("address", {required:"Address required"})}
            error={!!errors?.address}
            helperText={errors?.address ? errors.address.message : null}
            
            />  
        </Box>

        <Button type="submit"variant="contained" color="primary" >
          Add new find!
        </Button>
      </form>
      


    </Container>
      
      
       
  )
}

export default NewFind