import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 
 const AccessKey = "j_hdSyXs_ZFOHr-p8vAG28GSv-E8Q5bhVvD9JweaTM4";

export default function App(){
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState("")
  useEffect(function(){
    async function fetchPhotos(){
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${AccessKey}&s=${query}`
      )
      const data= await res.json();
      console.log(data)
    }
  })
  return(
    <div>
      <Form query={query} setQuery={setQuery}/>
    </div>
  )
}


function Form({query, setQuery}){
    const [photo, setPhoto] = useState("")
  return(
    <div className="bg-purple-700 p-3 mr-2 ml-2 border rounded-lg">
<form className='flex gap-4 justify-center'>
  <p className="text-white font-bold">📷Photos</p>
  <input
  type="text"
  className='bg-purple-400 p-2 text-white border rounded-lg w-7/12 md:w-7/12'
  value={query}
  onChange={(e)=>setQuery(e.target.value)}
  />
  <p className="text-white font-bold">Found Results </p>
</form>
</div>
  )
}