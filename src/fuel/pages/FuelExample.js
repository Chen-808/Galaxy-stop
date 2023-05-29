import React from 'react'
import { useParams } from 'react-router-dom'

function FuelExample() {
    const { id } = useParams()
  return (
    <div>FuelExample {id}</div>
  )
}

export default FuelExample