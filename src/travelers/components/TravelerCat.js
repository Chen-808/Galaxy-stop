import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import TravelExample from '../pages/TravelExample';


function TravelerCat(props) {
  return (
    <Card sx={{ 
      maxWidth: 300,
      backgroundColor: "card.main"
      }}>
    <CardActionArea component={Link} to={`/travelers/${props.id}`}>
      <CardMedia 
        component="img"
        height="150"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{props.name}</Typography>
        <Typography variant='body2' color='text.secondary'>{props.findsCount} {props.findsCount ===1? 'find': 'finds'}</Typography>

      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default TravelerCat