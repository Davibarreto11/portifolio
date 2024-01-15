import React from 'react'

import Button from '../Button'

export const Contacts: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center md:flex-row md:justify-between'>
      <div className='flex flex-col items-center md:items-start sm:w-2/3' >
        <h3
        className="
        text-2xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
        2xl:text-8xl
        sticky
        before:absolute
        before:h-1
        before:w-24
        md:ml-14
        md:before:w-56
        2xl:before:w-64
        before:bg-[#E63946]
        before:left-[-2px]
        md:before:left-[-225px]
        2xl:before:left-[-260px]
        before:top-10
        md:before:top-[28px]
        lg:before:top-[38px]
        xl:before:top-[48px]
        2xl:before:top-[80px]
        mt-2
        sm:mt-0
        mb-6
        "
        >
          Contacts
        </h3>
        <strong className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl'>Did you like some projects?</strong>
        <strong className='font-bold text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6sxl mt-4'>Let`s talk</strong>

        <div className='w-full flex items-start justify-center pl-4 sm:pl-0 sm:justify-start'>
          <Button href='/' type='red' label='Submit'/>
        </div>
      </div>
      <div className='w-full h-1/3 flex flex-col justify-around sm:w-1/3 2xl: mt-6'>
        <span className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>Name</span>
        <input type="text" className='bg-[#1D3557] border-b-4 text-sm lg:text-lg xl:text-xl 2xl:text-2xl' placeholder=''/>
        <span className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>Email</span>
        <input type="text" className='bg-[#1D3557] border-b-4 text-sm lg:text-lg xl:text-xl 2xl:text-2xl'/>
        <span className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>Message</span>
        <input type="text" className='bg-[#1D3557] border-b-4 text-sm lg:text-lg xl:text-xl 2xl:text-2xl'/>
      </div>
    </div>
  )
}
