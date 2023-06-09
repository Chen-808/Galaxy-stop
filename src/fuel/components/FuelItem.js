import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function FuelItem(props) {
  return (
    <Card sx={{ 
        maxWidth: 300,
        backgroundColor: "primary.light"
        }}>
      <CardActionArea component={Link} to={`/fuel/${props.id}`}>
        <CardMedia 
          component="img"
          height="150"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>{props.name}</Typography>
          
  
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FuelItem