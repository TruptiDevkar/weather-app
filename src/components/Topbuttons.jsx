import React from 'react'

const Topbuttons = ({setQuery}) => {
  const cities =[
    {
     id:1,
     name:'London'

    },
    {
      id:2,
      name:'Tokyo'
 
     },
     {
      id:3,
      name:'Sydney',
 
     },
     {
      id:4,
      name:'Paris',
 
     },
     {
      id:5,
      name:'Toronto'
 
     },
  ]
  
  return (

    <div className='flex items-center  justify-around my-6'>
      {
        cities.map(city=>(
          <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition: ease-in custom-font'
          onClick={()=> setQuery({q:city.name})}

          >
          

            {city.name} </button>

        )

        )
      }
    
    </div>
  )
}

export default Topbuttons
