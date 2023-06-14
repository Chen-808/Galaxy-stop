import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //boxShadow: 24,
  p: 4,
  borderRadius: '5px'
};

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
          <Typography gutterBottom variant='h6'>Finder: {props.creator}</Typography>
          <Typography gutterBottom variant='h6'>Address: {props.address}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleOpen}>View on map</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {props.address}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
        </CardActions>
    </Card>
  )
}

export default FindsItem