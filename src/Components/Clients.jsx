import React from 'react'

const Clients = () => {
  return (
    <>
       <div className="flex flex-col gap-3 justify-center items-center p-14 ">
        <h1 className="font-semibold text-2xl md:text-5xl lg:text-5xl">WHY CHOOSE US ?</h1>
        <div className="flex items-center w-72">
          <div className="h-[4px] w-full bg-purple-800"></div>
          <div className="h-3 w-16 bg-purple-800"></div>
          <div className="h-[4px] w-full bg-purple-800"></div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-6'>
        <div className='flex gap-4 px-10 md:px-24'>
            <div className='h-full w-[5px] bg-purple-800'></div>
            <div className='flex flex-col gap-3'>
                <p className='text-xs md:text-sm lg:text-sm font-semibold   '>TaskPulse streamlined our task management and client communication—simple, efficient, and highly effective!</p>

                <div className='flex items-center gap-2'>
                    <img src="user1.jpg" width={50} height={50}  className='rounded-full' alt="" />
                    <p>Agelina</p>
                </div>
            </div>
        </div>
        <div className='flex gap-4 px-10 md:px-24'>
            <div className='h-full w-[5px] bg-purple-800'></div>
            <div className='flex flex-col gap-3'>
                <p className='text-xs md:text-sm lg:text-sm font-semibold   '>TaskPulse transformed our task tracking and client updates—smooth, reliable, and incredibly efficient!</p>

                <div className='flex items-center gap-2'>
                    <img src="user2.jpg" width={50} height={50}  className='rounded-full' alt="" />
                    <p>John Dow</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Clients
