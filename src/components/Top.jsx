// import React from 'react'

const Top = () => {
  return (
    <div className='lg:px-20 flex justify-between items-center lg:h-[5rem] lg:w-full cursor-default'>
      <aside>
        <h1>Dancers4Life</h1>
      </aside>

      <nav className=' flex items-center justify-center lg:text-xl font-semibold text-defaultText tracking-wide'>
        <ul className='flex lg:space-x-4'>
          <li>Dance Classes</li>
          <li>Parties and Events</li>
          <li>About Us</li>
        </ul>
      </nav>

      <ul className='flex space-x-2'>
        <li className='border-2 border-[#fe9f0d] rounded-md px-2 text-lg'>
          Login
        </li>
        <li className='border-2 border-[#fe9f0d] rounded-md px-2 text-lg'>
          Sign Up
        </li>
      </ul>
    </div>
  )
}

export default Top
