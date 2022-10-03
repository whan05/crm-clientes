import React from 'react'

export const Error = ({children}) => {
  return (
    <div className='text-center my-4 bg-red-600 text-white font-bold uppercase p-3'> 
        {children}
    </div>
  )
}
