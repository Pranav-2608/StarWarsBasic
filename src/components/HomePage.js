import React from 'react';
import PlanetCard from './PlanetCard'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null); // State to store the URL of the next page
    const [prevPage, setPrevPage] = useState(null); // State to store the URL of the previous page
  
    useEffect(() => {
      fetchPlanets('https://swapi.dev/api/planets/?format=json'); // Fetch data for the initial page
    }, []); // Empty dependency array to run the effect only once
  
    const fetchPlanets = (url) => {
      axios.get(url)
        .then(response => {
          // Handle successful response
          setData(response.data.results); // Update the state with fetched planets data
          setNextPage(response.data.next); // Update the state with the URL of the next page
          setPrevPage(response.data.previous); // Update the state with the URL of the previous page
        })
        .catch(error => {
          // Handle error
          console.error('There was a problem fetching the planets data:', error);
        });
    };
  
    const handleNextPage = () => {
      if (nextPage) {
        fetchPlanets(nextPage); // Fetch data for the next page if available
      }
    };
  
    const handlePrevPage = () => {
      if (prevPage) {
        fetchPlanets(prevPage); // Fetch data for the previous page if available
      }
    };
  
  return (
    <div className='flex items-center justify-center flex-col'>
      {/* <h1 className='text-[72px] text-red-600'>PLANETS</h1> */}
      <div className='flex flex-row flex-wrap items-center justify-center w-[100vw] h-full p-20 mx-auto'>
      {
        data.map((planet, index) => (
           <div key={index} className='flex items-center justify-center flex-row flex-wrap w-full h-full outline bg-transparent backdrop-blur-[10px]
            text-white shadow-xl hover:scale-110 hover:z-20 hover:bg-slate-950 m-5'>
            {
                planet?(<PlanetCard  planet={planet}/>):(
                    <p className='text-white text-4xl'>Loading...</p>
                )
            }
           </div>
        ))
      }
      </div>
      <div className='flex items-center justify-center'>
      <ScrollToTop/>

      <button onClick={handlePrevPage} disabled={!prevPage} className='text-white p-2 bg-red-500 mr-2'>Previous</button>
      <button onClick={handleNextPage} disabled={!nextPage}  className='text-white p-2 bg-blue-500 ml-2'>Next</button>
      </div>
      </div>
  )
}

export default HomePage