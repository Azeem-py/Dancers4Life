import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../data/url'
import { formatDate } from '../functions/dataFormatter'
import { cacheClassData } from '../components/dataCache'
import { useNavigate } from 'react-router-dom'

const Dance = () => {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const [classes, setClasses] = useState([])

  useEffect(() => {
    !load &&
      axios
        .get(`${baseURL}/class-data/`)
        .then((resp) => {
          console.log(resp)
          setClasses(resp.data)
          setLoad(true)
        })
        .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    localStorage.removeItem('currentClass')
    localStorage.removeItem('currentEvent')
  }, [])

  const formattedDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }

  const handleClick = (id) => {
    cacheClassData(id, classes)
    navigate('/enroll')
  }

  return (
    <div className='w-[100vw] h-[calc(100vh-5rem)] bg-[#c0c0c0] overflow-y-auto py-[2rem]'>
      <header className='md:px-10 px-7'>
        <h3 className='font-bold md:text-5xl text-3xl pt-8 text-defaultText drop-shadow'>
          The <span className='text-bloodRed font-andika'>Dance Classes</span>{' '}
          We Offer...
        </h3>
      </header>

      <main>
        <section className='pt-10 px-10 flex flex-col gap-8'>
          {load &&
            classes.map((data) => {
              return (
                <div
                  className='lg:h-[30rem] flex lg:flex-row flex-col gap-10'
                  key={data.id}
                >
                  <aside className='lg:h-full lg:w-[30%] mt-5'>
                    <img
                      src={`${baseURL}${data.featureImg}`}
                      className='h-full w-full object-cover rounded-lg drop-shadow-md'
                    />
                  </aside>
                  <section className='lg:w-[70%]'>
                    <div>
                      <h3 className='text-5xl font-bold mt-5 text-bloodRed drop-shadow'>
                        {data.name}
                      </h3>
                      <footer className='ml-5 mt-3 text-lg text-[#343333] italic tracking-wide font-bold '>
                        <p>{`Class starts: ${formatDate(data.startDate)}`}</p>
                        <p>{`Class ends: ${formatDate(data.endDate)}`}</p>
                        <p className='text-bloodRed font-extrabold'>{`Class Fee: $${data.price}`}</p>
                      </footer>
                    </div>

                    <p className='text-lg mt-3 text-defaultText drop-shadow-md'>
                      {formattedDescription(data.description)}
                    </p>

                    <button
                      className='enrollBtn'
                      onClick={() => handleClick(data.id)}
                    >
                      Enroll!
                    </button>
                  </section>
                </div>
              )
            })}
        </section>
      </main>
    </div>
  )
}

export default Dance
