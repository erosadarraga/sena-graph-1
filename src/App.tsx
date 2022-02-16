import React from 'react'
import { GraphLine } from './components/GraphLine'
import "tailwindcss/tailwind.css"


export const App = () => {


  const  
  return (
    <div className='w-screen h-screen bg-red-200 items-center flex flex-col'>
      <div className='h-2/5 w-full  '>
        <div className='w-full h-1/5 bg-red-700 mt-2'>
          <div>Navbar</div></div>
        <div className=' bg-yellow-700 mt-2 h-4/5 flex w-full flex-col sm:flex-row  justify-between'>
          <div className=' bg-green-500  sm:w-3/6 h-3/6  sm:h-full '>1</div>
          <div className=' bg-amber-600 sm:w-3/6  h-3/6  sm:h-full'>2</div>
        </div>
      </div>
      <div className='sm:h-3/5 h-4/5 2-4/5 sm:w-3/5  bg-yellow-300 '>
        <GraphLine />
      </div>
    </div>
  )
}
