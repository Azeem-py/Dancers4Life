// import { eventCards } from '../data/cardData'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../data/global'

const EventsCards = () => {
  const [eventCards, setEventCards] = useState([])
  const [load, setLoad] = useState(false)
  useEffect(() => {
    !load &&
      axios
        .get(`${baseURL}/events/`)
        .then((resp) => {
          console.log(resp)
          setEventCards(resp.data)
          setLoad(true)
        })
        .catch((err) => console.log(err))
  })
  return (
    <div>
      <main>
        <section className='ml-5 lg:ml-20 lg:my-10 my-7'>
          <h4 className='text-4xl lg:text-5xl font-bold '>
            We also <br />
            <span className='ml-5 text-[#660000] font-extrabold font-andika text-2xl lg:text-7xl'>
              Host events and parties
            </span>
          </h4>
        </section>
        <section className='w-full mt-5 grid grid-cols-12 gap-3'>
          {/* dance class cards */}
          {eventCards.map((card, index) => {
            return (
              <div
                className='lg:col-span-3 col-span-12 bg-[rgb(192,192,192)] rounded-md shadow-xl h-[30rem]'
                key={index}
              >
                <header className='h-[60%]'>
                  <img
                    src={`${baseURL}${card.featureImg}`}
                    alt=''
                    className='h-full w-full object-cover rounded-md'
                  />
                </header>
                <main className='px-4 py-2'>
                  <h2 className='font-semibold font-andika text-xl'>
                    {card.name}
                  </h2>
                  <p
                    className='lg:text-lg'
                    dangerouslySetInnerHTML={{ __html: card.slogan }}
                  ></p>
                  <button className='enrollBtn'>Buy Ticket</button>
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

export default EventsCards
