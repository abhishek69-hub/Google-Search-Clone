import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios'
import { SearchState } from '../SearchContext'

const Search = () => {

    const {searchterm,setSearchterm}=SearchState()
    const location = useLocation();
    const[localterm,setLocalterm]=useState()
    console.log(localterm)
    console.log(searchterm)
    
    // const[{},dispatch]=useStateValue();
    
    // const[searchterm,setSearchterm]=useState()
    const navigate = useNavigate()
    // console.log(searchterm)


     
    
    
    const searchbutton=(e)=>{
        e.preventDefault()
        // dispatch({
        //     type:actionTypes.SET_SEARCH_TERM,
        //     term:searchterm
        // })
        
        setSearchterm(localterm)  
        console.log(searchterm)
        if(location.pathname === "/"){
            navigate('/searchresults')
            console.log(location)
        }
        
    }
    
    return (
        <div className="flex items-center">
            <input type="text" value={localterm} onChange={(e)=>setLocalterm(e.target.value)} placeholder="Search Google or type an URl" className='placeholder:ml-10 w-[600px] p-2 pl-10 h-10 mx-2 border border-black  rounded-full cursor-text shadow-lg ' />
            <button onClick={searchbutton} className="mx-2 border border-black p-3 rounded-sm cursor-pointer"><AiOutlineSearch size={15}/></button>
            
        </div>
    )
}

export default Search