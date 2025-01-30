import React from 'react'

function SearchName({setSearch}) {
  return (
    <><input type="search" name="" id="" className="border p-3 shadow min-w-96" placeholder='Search based on name' onChange={(e)=> setSearch(e.target.value)} /></>
  )
}

export default SearchName