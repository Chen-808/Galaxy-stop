import React from 'react'
import { Link } from 'react-router-dom'
import FuelList from '../components/FuelList'
import snack1 from '../../images/snack1.jpg'
import snack2 from '../../images/snack2.jpg'
import snack3 from '../../images/snack3.jpg'
import snack4 from '../../images/snack4.jpg'
import snack5 from '../../images/snack5.jpg'

function Fuel() {

  const Snacks = [
    {id:'f1',
     name: 'snack1',
     pic: snack1,
     },
     {id:'f2',
     name: 'snack2',
     pic: snack2,
     },
     {id:'f3',
     name: 'snack3',
     pic: snack3,
     },
     {id:'f4',
     name: 'snack4',
     pic: snack4,
     },
     {id:'f5',
     name: 'snack5',
     pic: snack5,
     },
  ]

  return (
    <>
      <h1>this is the main fuel page</h1>
      <FuelList items={Snacks}></FuelList>
      <Link to="/fuel/f1">Fuel 1</Link>
      <Link to="/fuel/f2">Fuel 2</Link>
    </>
  )
}

export default Fuel