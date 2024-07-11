import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../../constants'

function TitleDetails() {
  const [title, setTitle]=useState(null)
  const {id}=useParams()
  useEffect(()=>{
    const fetchCurrentPost=async()=>{
        try{
            const response=await fetch(`${API_URL}/${id}`)
            console.log('Response status:', response.status);
            if(response.ok){
                const json=await response.json()
                console.log('Response JSON:', json);
                setTitle(json)              
            }
            else{
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }
        }
        catch(e){
            console.log("an error occured",e)
        }
    }
    fetchCurrentPost()
  },[id])


  if(!title)return <h3>Loading...</h3>


  return(
    <div>
        <h3>{title.body}</h3>
        <Link to="/">Back to Title</Link>
    </div>
  )
}

export default TitleDetails