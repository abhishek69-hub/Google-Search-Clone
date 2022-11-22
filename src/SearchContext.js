import React, { createContext, useContext, useState } from 'react'



const Search=createContext()

const SearchContext = ({children}) => {

    const[searchterm,setSearchterm]=useState()
  return (
    <Search.Provider value={{ searchterm,setSearchterm }}>
      {children}
    </Search.Provider>
  )
}

export default SearchContext

export const SearchState = () => {
    return useContext(Search);
  };