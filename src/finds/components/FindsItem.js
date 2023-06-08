import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function FindsItem(props) {
    return (
    <Card sx={{ 
        maxWidth: 300,
        backgroundColor: "primary.light"
        }}>
        <CardMedia 
          component="img"
          height="150"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>{props.name}</Typography>
          <Typography gutterBottom variant='h6'>{props.description}</Typography>
          <Typography gutterBottom variant='h6'>Finder: {props.creator}</Typography>
          <Typography gutterBottom variant='h6'>Address: {props.address}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small">View on map</Button>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
        </CardActions>
    </Card>
  )
}

export default FindsItem