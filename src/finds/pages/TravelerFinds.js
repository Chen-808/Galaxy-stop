import React from 'react'
import { useParams } from 'react-router-dom'

function TravelerFinds() {
    const { userId } = useParams()
  return (
    <div>TravelerFinds {userId}</div>
  )
}

export default TravelerFinds