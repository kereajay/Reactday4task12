import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
const [images,setImages]=useState([])
useEffect(()=>{
  fetchmoviedata();
},[])

  async function fetchmoviedata() {
    let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=109a3159&s=hollywood");
    let data = await res.json();
    // console.log(data.Search);
    setImages(data.Search);

  }
  console.log(images);
  // fetchmoviedata();

  return (

    <>
       <h1 className='text-3xl text-center'>Movie poster using props and api</h1>
      {
        images.map((image,idx) => (
           <Card key={idx} imageurl={image.Poster}  title={image.Title} year={image.Year} imdbID={image.imdbID}/>
          
        ))
      }
    </>
  )
}

export default App
