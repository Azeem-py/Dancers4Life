import WhatWedo from '../components/WhatWedo'

const Home = () => {
  return (
    <div className='h-[calc(100vh-5rem)] w-[100vw] text-defaultText overflow-y-auto '>
      <section className='h-full w-full flex lg:flex-row flex-col bg-[#FE9F0D]'>
        <div className='px-5 flex flex-col flex-wrap justify-center gap-3 lg:w-[50%] lg:h-auto w-full h-[50%]'>
          <h2 className='text-6xl lg:text-9xl font-bold mb-3 mt-14 drop-shadow-md'>
            Dance?
          </h2>

          <h4 className='text-2xl lg:text-3xl font-light text-richBlack font-andika drop-shadow-xl'>
            Unleashing movement, deepening artistry, fueling creative
            expression.
          </h4>
        </div>
        <div className='h-[50%] w-full lg:h-full lg:w-[50%]'>
          <img
            src='https://cdn.jsdelivr.net/gh/Azeem-py/Dancers4Life/src/assets/dancing-img-top2.jpg'
            className='h-full w-full object-cover'
          />
        </div>
      </section>
      <WhatWedo />
    </div>
  )
}

export default Home
