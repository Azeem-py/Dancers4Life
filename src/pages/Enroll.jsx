import { useState, useEffect } from 'react'
import { formatDate } from '../functions/dataFormatter'
import axios from 'axios'
import { baseURL } from '../data/global'
import { useNavigate } from 'react-router-dom'

const Enroll = () => {
  useEffect(() => {
    axios
      .get(`${baseURL}/auth/is-auth/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .catch(() => {
        navigate('/login')
      })
  }, [])

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [cardData, setCardData] = useState({ cardNo: '', cvv: '' })
  const [errors, setErrors] = useState({ cardNo: '', cvv: '' })
  const [isProcessing, setIsProcessing] = useState(false)

  const classInfo = JSON.parse(localStorage.getItem('currentClass'))

  if (!classInfo) navigate('/dance-class')

  const handleCardNoChange = (e) => {
    const { value } = e.target
    // Remove non-numeric characters and limit to a typical card number length
    const formattedCardNo = value.replace(/\D/g, '').slice(0, 16)

    // Add hyphens after every 4 digits
    const formattedWithHyphens = formattedCardNo
      .match(/.{1,4}/g)
      ?.join('-')
      .slice(0, 19)

    setCardData({ ...cardData, cardNo: formattedWithHyphens || '' })
    // Clear the error message when user starts typing
    setErrors({ ...errors, cardNo: '' })
  }

  const handleCVVChange = (e) => {
    const { value } = e.target
    // Limit CVV to 3 digits
    const formattedCVV = value.slice(0, 3)
    setCardData({ ...cardData, cvv: formattedCVV })
    setErrors({ ...errors, cvv: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = { cardNo: '', cvv: '' }
    if (!cardData.cardNo) {
      newErrors.cardNo = 'Please provide a card number.'
    }
    if (!cardData.cvv) {
      newErrors.cvv = 'Please provide the CVV.'
    }

    if (newErrors.cardNo || newErrors.cvv) {
      setErrors(newErrors)
      return
    }

    setIsProcessing(true)

    axios
      .post(
        `${baseURL}/enroll/`,
        { DanceClass: classInfo['id'], user: localStorage.getItem('user') },
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then((resp) => {
        console.log(resp.data)
        navigate('/enroll-complete')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
      <div className='w-[30rem] h-fit text-defaultText shadow-md px-3 py-5 rounded-md'>
        <header className='my-7'>
          <h3 className='text-3xl md:text-4xl text-center font-bold mb-2'>
            You are enrolling for <br />
            <span className='text-bloodRed'>{classInfo['name']}</span>
          </h3>
          <span className='text-bloodRed font-semibold font-andika text-xl italic '>
            <p>{`Starting Date: ${formatDate(classInfo['startDate'])}`}</p>
            <p>{`Ending Date: ${formatDate(classInfo['endDate'])}`}</p>
            <p>{`Fee: $${classInfo['price']}`}</p>
          </span>
        </header>
        <form className='flex flex-col gap-5'>
          <label htmlFor='cardNo' className='input-label'>
            <span>Card Number</span>
            <input
              className='input'
              name='cardNo'
              id='cardNo'
              placeholder='0000-0000-0000-0000'
              onChange={handleCardNoChange}
              value={cardData.cardNo}
            />
            {errors.cardNo && <p className='text-bloodRed'>{errors.cardNo}</p>}
          </label>
          <label htmlFor='cvv' className='input-label'>
            <span>CVV</span>
            <input
              className='input'
              name='cvv'
              id='cvv'
              placeholder='123'
              onChange={handleCVVChange}
              value={cardData.cvv}
            />
            {errors.cvv && <p className='text-bloodRed'>{errors.cvv}</p>}
          </label>
          <button className='formBtn' onClick={handleSubmit}>
            {isProcessing ? 'Processing...' : 'Process Payment'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Enroll
