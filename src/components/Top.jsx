import { useState } from 'react'

import { RiMenu3Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Top = () => {
  const [showMenu, setShowMenu] = useState(false)

  const navStyle =
    'hidden lg:flex items-center justify-around lg:text-xl font-semibold text-defaultText tracking-[0.02rem]  w-[70vw]'

  const mobileNavStyle =
    'absolute top-[5rem] right-0 flex flex-col gap-10 h-[15rem] w-[70vw] items-center text-xl font-semibold text-defaultText tracking-[0.02rem] bg-white z-10 py-3'

  const active = 'border-b-4 border-[#660000] p-2 rounded'
  const link = 'hover:border-b-4 hover:border-[#660000] p-2 rounded'

  return (
    <div className='lg:px-20 px-5 flex justify-between items-center h-[5rem] w-full cursor-default'>
      <aside className=''>
        <h1>Dancers4Life</h1>
      </aside>
      {/* {showIcon && <RiMenu3Line />} */}
      <span
        className='lg:hidden text-2xl'
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <IoClose /> : <RiMenu3Line />}
      </span>
      <nav className={showMenu ? mobileNavStyle : navStyle}>
        <ul className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-5'>
          <li className=''>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? active : link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dance-class'
              className={({ isActive }) => (isActive ? active : link)}
            >
              Dance Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='parties-event'
              className={({ isActive }) => (isActive ? active : link)}
            >
              Parties and Events
            </NavLink>
          </li>
        </ul>

        <ul className='flex space-x-2'>
          <li className='bg-[#fe9f0d] text-richBlack authBtn'>Login</li>
          <li className='border-2 border-[#fe9f0d] authBtn'>Sign Up</li>
        </ul>
      </nav>
    </div>
  )
}

export default Top
