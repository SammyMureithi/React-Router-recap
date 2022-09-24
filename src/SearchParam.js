import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchParam() {
    const [searchParam, setSearchParam] = useSearchParams();
    const showActiveUsers = searchParam.get( "filter" ) === "active";
    const showGoodGrades = searchParam.get( "filter" ) === "A-plain";
  return (
      <div>
          <button onClick={()=> setSearchParam({filter:"active"})}>Active Users</button>
          <button onClick={() => setSearchParam( {} )}>All User</button>
          {
              showActiveUsers?(<h1>Active Users</h1>):(<h1>All users</h1>)
          }
          <button onClick={() => setSearchParam( { filter: "A-plain" } )}>A plains</button>
          <button onClick={()=> setSearchParam({})}>All Grades</button>
          {
              showGoodGrades?(<h1>All good grades in town</h1>):(<h1>All grades</h1>)
          }
    </div>
  )
}

export default SearchParam