import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 
 const AccessKey = "j_hdSyXs_ZFOHr-p8vAG28GSv-E8Q5bhVvD9JweaTM4";
 
export default function App(){
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(null)
const  [loading, setLoading] = useState(false)
  useEffect(function(){
    async function fetchPhotos(){
      setLoading(true)
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&client_id=${AccessKey}&query=${query}`
      )
      const data= await res.json();
      console.log(data.results)
      setPhotos(data.results)
      setLoading(false)
    }
    fetchPhotos();
  }, [query])

  function handlePhoto(id) {
    setSelected(id)
    console.log(id)
  }
  return(
    <div className="w-11/12">
      <Form query={query} setQuery={setQuery}/>
      <Photos photos={photos} onPhoto={handlePhoto} />
      <PhotoDetails selected={selected}/>
    </div>
  )
}

function IsLoading({loading}){
  return(
    <div>
   <p>...Loading</p>
    </div>
  )
} 
 
function Form({query, setQuery}){
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

function Photos({photos, onPhoto}){
return(
  <div className="h-fit">
{photos.map((photo)=>(
  <Photo key={photo.id} photo={photo} onPhoto={onPhoto}/>
))}
  </div>
)
}
 function Photo({photo, onPhoto}){
  const photoDescription = photo.alt_description
    .replaceAll("-", " ")
    .toUpperCase(0)
  
return(
  <div className="w-[250px] flex gap-4 shadow-lg" onClick={()=>onPhoto(photo.id)}>
    <img src={photo.urls.thumb} alt={photo.alt_description} className="w-[50px] border rounded-lg" />
  <p><span className="font-bold">Photo description : </span><span className='text-sm'><em>{photoDescription}</em></span></p>
  </div>
)
}

function PhotoDetails({selected}){
const [photo, setPhoto] = useState({})

/*useEffect(function() {
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.unsplash.com/photos/${selected}?client_id=${AccessKey}`
      );
      const data = await res.json();
      console.log(data);
      setPhoto(data);
    }
    fetchPhoto();
  }, [selected] )*/
return(
  <div>
    <p>hhhh</p>
  </div>
)
}