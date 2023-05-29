import React from 'react'
import { Link } from 'react-router-dom'
import cat1 from '../../images/Cat1.jpg'
import cat2 from '../../images/Cat2.jpg'
import cat3 from '../../images/Cat3.png'
import TravelersList from '../components/TravelersList'
import NewTravel from './NewTravel'

function Travelers() {

  const hi = [ ]

  const Travelers = [
    {id:'t1',
     name: 'cat1',
     pic: cat1,
     finds: 4},

     {id:'t2',
     name: 'cat2',
     pic: cat2,
     finds: 1},

     {id:'t3',
     name: 'cat3',
     pic: cat3,
     finds: 2}
  ]

  return (
    <>
    <h1>This is the main travelers page</h1>
    <TravelersList items={Travelers}></TravelersList>
    
    
    <Link to="/travelers/t1">Traveler 1</Link>
    <Link to="/travelers/t2">Traveler 2</Link>
    <Link to="/travelers/newTravel">New travel</Link>
    
    </>
  )
}

export default Travelers