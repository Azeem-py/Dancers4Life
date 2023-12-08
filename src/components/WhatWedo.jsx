import { danceCards } from '../data/danceClassCard'

const WhatWedo = () => {
  return (
    <div className='pt-10 pb-3 px-3 '>
      <header className='text-center font-bold font-andika text-5xl flex flex-col justify-center items-center gap-1'>
        <h3 className='drop-shadow-md'>What We Do</h3>
        <hr className='border-2 border-[#FE9F0D] w-[5rem]' />
      </header>
      <main>
        <section className='ml-20 mt-20 mb-10'>
          <h4 className='text-3xl font-bold '>
            We Teach the <br />
            <span className='ml-5 text-[#660000] font-extrabold font-andika text-4xl'>
              Art of Dance
            </span>
          </h4>
        </section>
        <section className='w-full mt-5 grid grid-cols-12 gap-3'>
          {/* dance class cards */}
          {danceCards.map((card) => {
            return (
              <div
                className='lg:col-span-3 col-span-12 bg-[rgb(192,192,192)] rounded-md shadow-xl h-[30rem]'
                key={1}
              >
                <header className='h-[60%]'>
                  <img
                    src={card.img}
                    alt=''
                    className='h-full w-full object-cover rounded-md'
                  />
                </header>
                <main className='px-4 py-2'>
                  <h2 className='font-semibold font-andika text-2xl'>
                    {card.name}
                  </h2>
                  <p
                    className=' text-xl'
                    dangerouslySetInnerHTML={{ __html: card.slogan }}
                  ></p>
                  <button className='enrollBtn'>Enroll Now!</button>
                </main>
              </div>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default WhatWedo
