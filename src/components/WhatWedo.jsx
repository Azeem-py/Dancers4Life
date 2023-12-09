import DanceClassCard from './DanceClassCard'
import EventsCards from './EventsCards'

const WhatWedo = () => {
  return (
    <div className='pt-10 pb-3 px-3 '>
      <header className='text-center font-bold font-andika text-5xl flex flex-col justify-center items-center gap-1'>
        <h3 className='drop-shadow-md'>What We Do</h3>
        <hr className='border-2 border-[#FE9F0D] w-[8rem] mt-2' />
      </header>
      <DanceClassCard />
      <EventsCards />
    </div>
  )
}

export default WhatWedo
