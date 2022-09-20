import React,{useEffect, useState} from 'react'
import './css/style.css'

 
export default function Weather() {
    const [city,setcity] = useState(null);
    const [search,setsearch] = useState("");

    useEffect( () => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5fe6d40d799fd812c50b7ee16938f529`
            const response = await fetch(url);
            const resjson = await response.json();
            setcity(resjson.main)
        }
        fetchapi();
    },[search])

  return (
      <>
    <div className='main'>
    <img className='logo' src={require('./css/b.png')} alt='wea'/>
      <input className='search_bar' type="search" value={search} onChange={(event) => {setsearch(event.target.value)}}/>
    <div>
    {
      !city ? <p> Data Not Found </p> : <>
      <h1> {search} </h1>
      <h2> {city.temp} °C </h2>
      <p>{city.humidity} Humidity </p>
      <p> {city.temp_min} Temp_min</p>
      <p> {city.temp_max} Temp_max</p>
      </>
    }
    </div>  
    </div>
    </>
  )
}
