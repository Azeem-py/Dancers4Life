import { danceCards } from '../data/cardData'

const DanceClassCard = () => {
  return (
    <div>
      <main>
        <section className='ml-20 mt-10 mb-10'>
          <h4 className='text-5xl font-bold '>
            We Teach the <br />
            <span className='ml-5 text-[#660000] font-extrabold font-andika text-4xl lg:text-7xl'>
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
          {/* dance class card ends */}
        </section>
      </main>
    </div>
  )
}

export default DanceClassCard
