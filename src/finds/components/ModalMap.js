import React from 'react'
import { Box } from '@mui/material';
import "./MapStyles.css"
import "leaflet/dist/leaflet.css";
import Typography from '@mui/material/Typography';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { Icon } from 'leaflet'
import locationPin from '../../images/location-pin.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '5px'
};

function ModalMap(props) {
    let lat = props.lat
    let lng = props.lng
    
  const customIcon = new Icon({
    iconUrl: locationPin,
    iconSize: [38,38]
  })
  return (
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.address}
        </Typography>
        <MapContainer center={[lat, lng]} zoom={13}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={customIcon} />
        </MapContainer>
    </Box>
  )
}

export default ModalMap