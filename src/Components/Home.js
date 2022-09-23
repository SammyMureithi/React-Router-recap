import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [username, setUsername] = useState("Sammy");
    const navigate = useNavigate();
    function handleClick() {
        setUsername( "Sammy" );
        navigate('place-order')
    }
    return (
        <>
            <div>Home</div>
            <button onClick={handleClick} username={username}>Place Order</button>
      </>
      
      
  )
}

export default Home