import React from 'react'
import { FiPlus, FiPercent, FiMonitor, FiSmartphone, FiCloud } from 'react-icons/fi'

export const AboutMe: React.FC = () => {
  return (
    <div className='flex flex-col justify-between items-center sm:flex-row'>
      <div className='w-full h-full sm:w-1/2 flex flex-col justify-around lg:justify-evenly xl:justify-around 3xl:justify-evenly sm:pt-12 sm:pb-12 xl:pt-36 xl:pb-22'>
        <div className='w-11/12 flex items-center justify-evenly
        sticky
        before:absolute
        before:h-10
        before:w-1
        before:bg-[#E63946]
        before:left-[2px]
        sm:before:left-[-8px]
        sm:before:h-14
        md:before:h-16
        2xl:before:h-24
        lg:before:left-[16px]
        xl:before:left-[16px]
        2xl:before:left-[26px]
        '>
          <FiMonitor size={65} className='w-1/12' />
          <p className='text-lg sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl'>Website development</p>
        </div>
        <div className='w-11/12 flex items-center justify-evenly
          sticky
          before:absolute
          before:h-10
          before:w-1
          before:bg-[#E63946]
          before:left-[2px]
          sm:before:left-[-8px]
          sm:before:h-14
          md:before:h-16
          2xl:before:h-24
          lg:before:left-[16px]
          xl:before:left-[16px]
          2xl:before:left-[26px]
          '>
          <FiSmartphone size={65} className='w-1/12' />
          <p className='text-lg sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl p-2'>Mobile development</p>
        </div>
        <div className='w-11/12 flex items-center justify-evenly
          sticky
          before:absolute
          before:h-10
          before:w-1
          before:bg-[#E63946]
          before:left-[2px]
          sm:before:left-[-8px]
          sm:before:h-14
          md:before:h-16
          2xl:before:h-24
          lg:before:left-[16px]
          xl:before:left-[16px]
          2xl:before:left-[26px]
          '>
          <FiCloud size={65} className='w-1/12' />
          <p className='text-lg sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl'>Fullstack development</p>
        </div>
      </div>
      <div className='w-full sm:w-1/2 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h3 className='font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-7xl mt-4 sm:mt-0'>About me</h3>
          <p className='text-sm sm:text-base lg:text-lg xl:text-2xl 2xl:text-4xl text-center sm:text-left mt-4 2xl:mt-14'>
            Comecei meus estudos no início de 2022, me apaixonando cada vez mais pela
            área de desenvolvimento criei pojetos que simulacem o mercado de trabalho
            buscando me destacar na áreaatualmente possuo 1 projeto grande de autoria
            própria {'WorkMed'} incialmente construído em PHP e posteriomente transformado
            em Nodejs e ReactJS, e entre outros  projetos de bootcamps quefiz ao longo da minha jornada.
          </p>
        </div>
        <div className='w-full flex items-center justify-between mt-4 lg:mt-6 2xl:mt-20 sm:mt-0'>
          <div className='w-1/4 flex flex-col items-center'>
            <div className='w-full flex items-center justify-between'>
              <span className='text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>100</span>
              <FiPlus size={25} color='#E63946'/>
            </div>
            <strong className='text-sm sm:text-lg lg:text-2xl 2xl:text-4xl mt-2'>Completed projects</strong>
          </div>
          <div className='w-1/4 flex flex-col items-center'>
            <div className='w-full flex items-center justify-between'>
              <span className='text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>100</span>
              <FiPercent size={25} color='#E63946'/>
            </div>
            <strong className='text-sm sm:text-lg lg:text-2xl 2xl:text-4xl mt-2'>Completed projects</strong>
          </div>
          <div className='w-1/4 flex flex-col items-center'>
            <div className='w-full flex items-center justify-between'>
              <span className='text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>100</span>
              <FiPlus size={25} color='#E63946'/>
            </div>
            <strong className='text-sm sm:text-lg lg:text-2xl 2xl:text-4xl mt-2'>Years of experiences</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
