import React from 'react'

interface ButtonProps {
  label: string
  type: 'none' | 'red'
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return (
    <a
      href=''
      className={`hover:translate-y-[-5px] border-[1px] border-[#E63946] mt-8 px-4 py-4 text-xs md:text-sm lg:text-base xl:text-2xl rounded font-bold ${type === 'red' ? 'bg-[#E63946] mr-8' : 'px-8'} `}
    >
      <h1>{label}</h1>
    </a>
  )
}

export default Button
