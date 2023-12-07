import ballroom1 from '../assets/ballroom1.jpg'
import ballroom2 from '../assets/ballroom2.jpg'

const WhatWedo = () => {
  return (
    <div className='pt-5 pb-3 px-3 bg-[#C0C0C0]'>
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
          <section>
            <div>
              <span>
                <img />
              </span>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default WhatWedo
