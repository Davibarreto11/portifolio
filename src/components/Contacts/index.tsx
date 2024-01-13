import React from 'react'

import Button from '../Button'

export const Contacts: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center md:flex-row md:justify-between'>
      <div className='flex flex-col items-center md:items-start' >
        <h3
        className="
        text-2xl
        md:text-2xl
        lg:text-4xl
        xl:text-6xl
        2xl:text-[102px]
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
        md:before:top-[24px]
        lg:before:top-[36px]
        xl:before:top-[48px]
        2xl:before:top-[80px]
        mt-4
        mb-6
        "
        >
          Contacts
        </h3>
        <strong className='font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[102px]'>Did you like some projects?</strong>
        <strong className='font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[102px] mt-4'>Let`s talk</strong>

        <div className='flex items-center'>
          <Button type='red' label='Submit'/>
        </div>
      </div>
      <div className='w-72 md:w-1/3 2xl: mt-6'>
        Form
      </div>
    </div>
  )
}
