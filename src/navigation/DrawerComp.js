import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { color } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const navigate = useNavigate();
    const PAGES = [
        {name: 'Home', url: '/'},
        {name: 'Travelers', url: '/travelers'},
        {name: 'Fuel', url: '/fuel'},
        {name: 'Finds', url: '/finds'},
        {name: 'Login', url: '/login'},
        {name: 'Logout', url: '/logout'},
    ]

    const onHandleClickChange = (event, page) => { 
        setOpenDrawer(false);
        //event.preventDefault();
        navigate(page);
    };

  return (
    <>
        <Drawer 
            open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
            anchor= "right"
        >
            {/*Might wanna re-do this part cuz of the logout */}
            <List>
                {
                    PAGES.map((page, index) => (
                        <ListItem key={index} >
                            <ListItemButton onClick={(event)=>{onHandleClickChange(event, page.url)}}  component='button'>
                                <ListItemText secondary={page.name}/>
                            </ListItemButton>   
                        </ListItem>
                        
                    ))
                }

            </List>
        </Drawer>
        <IconButton 
         sx={{color:"white"}}
         onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    
    </>
    
  )
}

export default DrawerComp