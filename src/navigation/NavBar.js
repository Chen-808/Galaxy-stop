import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import { AppBar, Toolbar} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { Box } from '@mui/material'
import { sizing } from "@mui/system"
import logo from '../images/GalacticStopLogo.jpg'

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  

function NavBar() {


  return (
    <>
        {/*
            <div>
            NavBar
            <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/travelers">travelers</Link></li>
            <li><Link to="/fuel">fuel</Link></li>
        </ul>
        </div>
        */}
        
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Box 
                        component="img"
                        sx={{height: "4em"}}
                        alt="Galactic stop logo"
                        src={logo}
                    
                    />
                    
                </Toolbar>
            </AppBar>

        </HideOnScroll>
        <Box sx={{height: "4em"}}/>

        <Outlet/>
    </>
    
  )
}

export default NavBar