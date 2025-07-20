import React from 'react'

export const Header = ({title,description}:{title:string,description:string}) => {
  return (
    <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2a29] mb-2">{title}</h1>
          <p className="text-[#666666]">{description}</p>
    </section>
  )
}

export default Header