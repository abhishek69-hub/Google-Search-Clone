import React from 'react'

const SearchItem = (props) => {
  return (
    <div className='flex flex-col items-start  ml-[165px] mt-12 '>
      <span className='text-gray-700 text-sm '><a href={props.Url}>{props.Url}</a></span>
      <h6 className='text-blue-600 text-lg mt-1 hover:underline'><a href={props.Url}>{props.Title}</a></h6>
      <p className='text-black text-md mt-1 w-4/5'>{props.Snippet}</p>
    </div>
  )
}

export default SearchItem
