import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const PersonPage = () => {
    const[person,setPerson] = useState([]);
    const { personId } = useParams();

    useEffect(() => {
      const fetchPerson = async () => {
        try {
          const response = await axios.get(`https://swapi.dev/api/people/${personId}/`);
          console.log(response.data);
          setPerson(response.data);
        } catch (error) {
          console.error('Error fetching person data:', error);
        }
      };
  
      fetchPerson();
    }, [personId]);

  return (
    <div className='h-full w-full lg:h-[100vh] lg:w-[100vw]  outline p-20'>
      <h2 className='text-white text-[72px]'>Person Details</h2>
      {person ? (
        <div className='flex justify-evenly flex-col text-white gap-2 m-2 outline p-10  bg-transparent backdrop-blur-[10px] flex-wrap'>
      <div className='text-4xl '>{person.name}</div>
      <hr className='text-white w-[100%]' />
      <div className='flex items-center justify-center flex-col gap-3 text-xl flex-wrap'>
        {/* Planet details */}
        <div className='flex items-center justify-center flex-col gap-3 text-xl'>
       <div className='flex lg:flex-row flex-col gap-3'>
       <div className='flex flex-col gap-4 mr-1 border border-1 p-4'>
       <p><span>Height</span></p>
       <p>{person.height}</p>
       </div>
       <div className='flex flex-col gap-4 mr-1 border-r-1 border border-1 p-4'>
       <p><span>Mass</span></p>
       <p>{person.mass}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Hair_Color</span></p>
       <p>{person.hair_color}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Skin_color</span></p>
       <p>{person.skin_color}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Gender</span></p>
       <p>{person.gender}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Eye_color</span></p>
       <p>{person.eye_color}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Birth_Year</span></p>
       <p>{person.birth_year}</p>
       </div>
       </div>
       </div>
       </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonPage;
