//THE GALAXY PROJECT TO BE WORKED ON
import * as React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import FrontPage from "./frontPage/FrontPage";
import Travelers from "./travelers/pages/Travelers";
import Fuel from './fuel/pages/Fuel'
import Finds from './finds/pages/Finds'
import TravelExample from "./travelers/pages/TravelExample";
import NotFound from "./notFound/NotFound";
import FuelExample from "./fuel/pages/FuelExample";
import NewTravel from "./travelers/pages/NewTravel";
import NavBar from "./navigation/NavBar";
import NewFuel from "./fuel/pages/NewFuel"
import { useTheme, Theme, ThemeProvider } from '@mui/material'
import { MainTheme } from "./Theme/MainTheme";
import TravelerFinds from "./finds/pages/TravelerFinds";

function App(){
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Routes>

          <Route path="/" element={<NavBar/>}> {/*The NavBar component will always appear on top */}
            <Route index element={<FrontPage />} />
            <Route path="travelers">
              <Route index element={<Travelers />}/>
              {/* <Route path=":heyo" element={<TravelExample/>}/> */}
              <Route path="newTravel" element={<NewTravel/>}/>
              <Route path=":userId/findings" element={<Finds/>}/>              
            </Route>

            <Route path="/fuel">
              <Route index element={<Fuel />}/>
              <Route path=":id" element={<FuelExample/>}/>
              <Route path="newTravel" element={<NewFuel/>}/>
            </Route>

            <Route path="/finds">
              <Route index element={<Finds />}/>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />}/>
        </Routes>

      </ThemeProvider>
      
  
  </>
  )
  
}

export default App