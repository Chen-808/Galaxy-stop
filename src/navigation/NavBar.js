import React, {useState} from 'react'
import { Link, Outlet} from 'react-router-dom'
import { AppBar, Toolbar} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material'
import logo from '../images/GalacticStopLogo.jpg'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import DrawerComp from '../navigation/DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';


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

  const PAGES = ["Home", "Travelers", "Fuel", "Finds"]
  

function NavBar() {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTabClick = (event, page) => {
        navigate(page);
    }

  const theme = useTheme();
  //console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const PAGES = [
    {name: 'Home', url: '/'},
    {name: 'Travelers', url: '/travelers'},
    {name: 'Fuel', url: '/fuel'},
    {name: 'Finds', url: '/finds'}
]
  

  return (
    <>        
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar >
                    <Box sx={{height: "4em", flexGrow: 1}}>
                       <img 
                        alt="Galactic stop logo"
                        src={logo}
                        width={350} 
                        />
                    </Box>

                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <> 
                                <Tabs 
                                    icon
                                    value= {value}
                                    onChange={handleChange}
                                    textColor="white"
                                    indicatorColor="secondary"
                                    aria-label="secondary tabs example"
                                    >
                                    {
                                        PAGES.map((page, index) => (
                                            <Tab key={index} value={index} label={page.name} onClick={(event)=>{navigate(page.url)}} />
                                        ))
                                    }
                                    
                                </Tabs>
                                <Button variant="contained" sx={{backgroundColor:'secondary'}}>Log In</Button>
                            </>

                        )
                    }
                    
                    
                </Toolbar>
                
            </AppBar>

        </HideOnScroll>
        <Box sx={{height: "4em"}}/>

        <Outlet/>
    </>
    
  )
}

export default NavBar