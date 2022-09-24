import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicRoute() {
    const { userId } = useParams();
  return (
      <div>
          <h1>Am a dynamic Route  with {userId} param</h1>
    </div>
  )
}

export default DynamicRoute