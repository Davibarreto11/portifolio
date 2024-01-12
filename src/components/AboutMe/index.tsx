import React from 'react'
import { FiPlus, FiPercent } from 'react-icons/fi'

export const AboutMe: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <h3 className='font-bold text-3xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-[102px] mt-4'>About me</h3>
        <p className='text-xs mt-2'>
          Comecei meus estudos no início de 2022, me apaixonando cada vez mais pela áreade desenvolvimento criei pojetos que simulacem o mercado de trabalho buscando me destacar na áreaatualmente possuo 1 projeto grande de autoria própria {'WorkMed'} incialmente construído
          em PHP e posteriomentetransformado em Nodejs e ReactJS, e entre outros  projetos de bootcamps quefiz ao longo da minha jornada.
        </p>
      </div>
      <div className='w-full flex items-center justify-between mt-4'>
        <div className='w-1/4 flex flex-col items-center'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-lg'>100</span>
            <FiPlus size={20} color='#E63946'/>
          </div>
          <strong className='text-sm mt-2'>Completed projects</strong>
        </div>
        <div className='w-1/4 flex flex-col items-center'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-lg'>100</span>
            <FiPercent size={20} color='#E63946'/>
          </div>
          <strong className='text-sm mt-2'>Completed projects</strong>
        </div>
        <div className='w-1/4 flex flex-col items-center'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-lg'>100</span>
            <FiPlus size={20} color='#E63946'/>
          </div>
          <strong className='text-sm mt-2'>Years of experiences</strong>
        </div>
      </div>
    </div>
  )
}
