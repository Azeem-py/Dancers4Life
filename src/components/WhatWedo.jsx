import ballroom1 from '../assets/ballroom1.jpg'
import ballroom2 from '../assets/ballroom2.jpg'

const WhatWedo = () => {
  return (
    <div className='pt-5 pb-3 px-3 '>
      <header className='text-center font-bold font-andika text-3xl flex flex-col justify-center items-center gap-1'>
        <h3>What We Do</h3>
        <hr className='border-2 border-[#FE9F0D] w-[5rem]' />
      </header>
      <main>
        <section className='ml-20'>
          <h4 className='text-3xl font-bold '>
            We Teach the <br />
            <span className='ml-5 text-[#660000] font-extrabold font-andika text-4xl'>
              Art of Dance
            </span>
          </h4>
          <div className='flex gap-6 flex-wrap'>
            <section className='flex flex-wrap drop-shadow-2xl'>
              <div className='w-[30rem] h-[30rem] bg-[#C0C0C0] rounded-md'>
                <img
                  src='https://cdn.jsdelivr.net/gh/Azeem-py/Dancers4Life/src/assets/ballroom1.jpg'
                  alt=''
                  className=' object-cover rounded-md'
                  width='100%'
                  height='auto'
                />
                <section className='px-4 py-3 '>
                  <h5 className='text-3xl font-bold mb-3'>Ballroom Dance</h5>
                  <span className='font-light font-andika text-lg'>
                    <p>Two left feet? We've got two right ones for you.</p>
                    <p>Dust off your dancing shoes.</p>
                  </span>
                </section>
              </div>
            </section>
            <section className='flex flex-wrap drop-shadow-2xl'>
              <div className='w-[30rem] h-[30rem] bg-[#C0C0C0] rounded-md'>
                <img
                  src='https://cdn.jsdelivr.net/gh/Azeem-py/Dancers4Life/src/assets/ballroom1.jpg'
                  alt=''
                  className=' object-cover rounded-md'
                  width='100%'
                  height='auto'
                />
                <section className='px-4 py-3 '>
                  <h5 className='text-3xl font-bold mb-3'>Ballroom Dance</h5>
                  <span className='font-light font-andika text-lg'>
                    <p>Two left feet? We've got two right ones for you.</p>
                    <p>Dust off your dancing shoes.</p>
                  </span>
                </section>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WhatWedo
