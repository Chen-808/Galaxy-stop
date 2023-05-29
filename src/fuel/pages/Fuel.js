import React from 'react'
import { Link } from 'react-router-dom'

function Fuel() {
  return (
    <>
      <h1>this is the main fuel page</h1>
      <Link to="/fuel/f1">Fuel 1</Link>
      <Link to="/fuel/f2">Fuel 2</Link>
    </>
  )
}

export default Fuel