import React from 'react';
import { Link } from 'react-router-dom';

const PlanetCard = ({ planet }) => {
  const residents = planet.residents;

  return (
    <div className='flex justify-evenly flex-col gap-2 m-2 flex-wrap'>
      <div className='text-4xl'>{planet.name}</div>
      <hr className='text-white w-[100%]' />
      <div className='flex items-center justify-center flex-col gap-3 text-xl'>
        {/* Planet details */}
        <div className='flex items-center justify-center flex-col gap-3 text-xl'>
       <div className='flex lg:flex-row flex-col gap-3'>
       <div className='flex flex-col gap-4 mr-1 border border-1 p-4'>
       <p><span>Rotation_period</span></p>
       <p>{planet.rotation_period}</p>
       </div>
       <div className='flex flex-col gap-4 mr-1 border-r-1 border border-1 p-4'>
       <p><span>Orbital_period</span></p>
       <p>{planet.orbital_period}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Diameter</span></p>
       <p>{planet.diameter}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Climate</span></p>
       <p>{planet.climate}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Gravity</span></p>
       <p>{planet.gravity}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Terrain</span></p>
       <p>{planet.terrain}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Surface_Water</span></p>
       <p>{planet.surface_water}</p>
       </div>
       <div className='flex flex-col gap-4 border border-1 p-4'>
       <p><span>Population</span></p>
       <p>{planet.population}</p>
       </div>
       </div>
       </div>
       <div>
          Residents
       </div>

        <div className='flex lg:flex-row flex-col'>
          {residents.map((resident, id) => {
            // Extract the person ID from the resident URL
            const personId = resident.match(/\/(\d+)\/$/)[1];
            return (
              <div key={id} className='flex flex-wrap flex-row'>
                {/* Use the extracted person ID in the Link component */}
                <Link to={`/person/${personId}`}>
                  <p className='border p-2 m-2'>Person {personId}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
