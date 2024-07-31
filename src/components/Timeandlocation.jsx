import React from 'react'

const Timeandlocation = ({weather:{ formattedLocalTime,name,country},}) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight text-white'>
            
            {formattedLocalTime}
        </p>
      </div>
<div className='flex items-center justify-center my-3'>
    <p className='text-3xl font-medium text-white'>{`${name},${country}`}</p>
</div>

    </div>
  )
}

export default Timeandlocation
