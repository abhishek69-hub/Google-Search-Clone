import React, { useState } from 'react'
import Search from './Search'
import { Routes,Route, useNavigate } from 'react-router-dom';
import logo from './logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import SearchItem from './SearchItem';
import { useStateValue } from '../StateProvider';


import useGoogleSearch from '../pages/useGoogleSearch';
import { SearchState } from '../SearchContext'





const SearchResults = () => {



const {searchterm}=SearchState()
 console.log(searchterm)
 const {results} = useGoogleSearch(searchterm)


 
  const navigate = useNavigate()
  const handleOnClick=()=>{
    navigate('/')
  }



  return (
    <div className='mb-5'>
      <div className='border-bottom border-black'>

        <div className='flex m-5 mt-10 p-4'>
          <img src={logo} alt="google" onClick={handleOnClick}  className='items-center w-[120px] h-auto cursor-pointer' />
          <Search />
        </div>
        <div className='flex ml-[160px] '>
          <span className='flex mx-2 items-center text-gray-600'><AiOutlineSearch />All</span>
          <span className='flex mx-2 items-center text-gray-600'><AiOutlineSearch />Images</span>
          <span className='flex mx-2 items-center text-gray-600'><AiOutlineSearch />Videos</span>
          <span className='flex mx-2 items-center text-gray-600'><AiOutlineSearch />News</span>
          <span className='flex mx-2 items-center text-gray-600'> <AiOutlineSearch />Shopping</span>

        </div>

        

      </div>

      <hr className='mt-4'/>

     
{ results &&
      <div> 
         <p className='ml-[160px] text-slate-400 mb-10'>About {results?.searchInformation.formattedTotalResults} results ({results?.searchInformation.searchTime}seconds) for {searchterm}</p>
          
          {results.items.map((element) => {

            return <div key={element.formattedUrl} >
              <SearchItem Url={element.formattedUrl}  Title={element.title} Snippet={element.snippet}/>
            </div>
          })}

      </div> 
      
      }
    </div>
  )
}

export default SearchResults
