import React from 'react'
import "./MapStyles.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import ModalMap from './ModalMap';


function FindsItem(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography gutterBottom variant='h6'>Finder: {props.identifier}</Typography>
          <Typography gutterBottom variant='h6'>Address: {props.address}</Typography>
          <Typography gutterBottom variant='h6'>coordinates: {props.coordinates.lat}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleOpen}>View on map</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalMap lat={props.coordinates.lat} lng={props.coordinates.lng} address={props.address}/>
            </Modal>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
        </CardActions>
    </Card>
  )
}

export default FindsItem