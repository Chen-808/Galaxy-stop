import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div>
            NavBar
            <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/travelers">travelers</Link></li>
            <li><Link to="/fuel">fuel</Link></li>
        </ul>
        </div>
        <Outlet/>
    </>
    
  )
}

export default NavBar