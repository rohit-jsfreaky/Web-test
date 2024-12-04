import { Locate, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='md:pl-28 p-6 lg:pl-20'>
            <img src="logo.png" height={100} width={100} alt="" />
            <p className='text-white'>The TaskPulse empowers SMBs with tailored solutions and expert services to drive success and innovation.</p>
        </div>

        <div className='md:pl-28 p-6 lg:pl-20 flex flex-col gap-6'>
            <h1 className='text-white font-bold text-lg'>CONTACT US</h1>
            <h1 className='text-white flex gap-4'> <span><Locate/></span>2nd floor, NS Complex, Nelamangala Bangalore - 562123</h1>
            <h1 className='text-white flex gap-4'><span><Mail/></span>support@taskpules.in</h1>
        </div>
      </div>
    </>
  )
}

export default Footer
