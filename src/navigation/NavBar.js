import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import { AppBar, Toolbar} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material'
import logo from '../images/GalacticStopLogo.jpg'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

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
                    {/*
                     <Box 
                        component="img"
                        sx={{height: "4em", flexGrow: 1}}
                        alt="Galactic stop logo"
                        src={logo}
                    />
                     */}
                    <Box sx={{height: "4em", flexGrow: 1}}>
                       <img 
                        alt="Galactic stop logo"
                        src={logo}
                        width={350} 
                        />
                    </Box>
                    
                    <Tabs icon>
                        <Tab label="Home" />
                        <Tab label="Travelers" />
                        <Tab label="Fuel" />
                        <Tab label="Finds" />
                    </Tabs>
                    
                </Toolbar>
            </AppBar>

        </HideOnScroll>
        <Box sx={{height: "4em"}}/>

        <Outlet/>
    </>
    
  )
}

export default NavBar