import react,{useEffect, useState} from "react"
import axios from 'axios';

const API="AIzaSyDHZ05q-DQr0VFmmrndKdFF5hrMxpc0y84"
const cs="35c6bfcc48ae84fad"

const useGoogleSearch=(term)=>{

    
    const url=`https://www.googleapis.com/customsearch/v1?key=${API}&cx=${cs}&q=${term}`
    const[results,setResults]=useState();

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setResults(response.data)  
            console.log(results)
          }).catch((error)=>{
            console.log(error)
            setResults()
          })
    },[term])

    return {results}
}

export default useGoogleSearch; 