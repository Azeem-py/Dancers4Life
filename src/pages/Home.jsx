import WhatWedo from '../components/WhatWedo'

const Home = () => {
  return (
    <div className='h-[calc(100vh-5rem)] text-defaultText overflow-auto'>
      <section className='grid lg:grid-cols-2  w-full h-full bg-[#FE9F0D]'>
        <div className='px-5 flex flex-col justify-center gap-3'>
          <h2 className='text-9xl font-bold mb-3 mt-14 drop-shadow-md'>
            Dance?
          </h2>

          <h4 className='text-3xl font-light text-richBlack font-andika drop-shadow-xl'>
            Unleashing movement, deepening artistry, fueling creative
            expression.
          </h4>
        </div>
        <div className='TopImgContainer'></div>
      </section>
      <WhatWedo />
    </div>
  )
}

export default Home
