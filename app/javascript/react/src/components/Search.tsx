import React from 'react'

const Search = () => {
  return (
    <>
      <div className="px-2 py-4 border-b-2">
        <input
          type="text"
          placeholder="Search Chat"
          className="w-full px-2 py-2 border-2 border-gray-200 rounded-2xl"
        />
      </div>
    </>
  )
}

export default Search
