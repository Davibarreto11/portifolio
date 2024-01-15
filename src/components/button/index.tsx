import React from 'react'

interface ButtonProps {
  label: string
  type: 'none' | 'red'
  href: string
}

const Button: React.FC<ButtonProps> = ({ label, type, href }) => {
  return (
    <a
      href={href} target="_blank" className={`hover:translate-y-[-5px] border-[1px] border-[#E63946] mt-8 px-4 py-4 text-xs md:text-sm lg:text-base xl:text-2xl xl:py-4 2xl:text-4xl 2xl:py-8 rounded font-bold ${type === 'red' ? 'bg-[#E63946] mr-8' : ''} `} rel="noreferrer"
    >
      <h1>{label}</h1>
    </a>
  )
}

export default Button
