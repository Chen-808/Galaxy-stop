import React from 'react'
import { useParams } from 'react-router-dom'

function TravelExample() {
    const { heyo } = useParams()
  return (
    <div>TravelExample {heyo}</div>
  )
}

export default TravelExample