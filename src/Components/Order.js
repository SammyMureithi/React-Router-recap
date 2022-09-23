import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order( { username } ) {
    const navigate = useNavigate();
    return (
        <>
            <div>Order placed Sucessfully {username}</div>
            <button onClick={()=>navigate(-1,{replace:true})}>Back</button>
      </>
      
  )
}

export default Order