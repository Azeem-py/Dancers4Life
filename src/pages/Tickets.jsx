import { useState } from 'react'
import { formatDate } from '../functions/dataFormatter'
import { validateEmail } from '../functions/validateEmail'
import axios from 'axios'
import { baseURL } from '../data/url'
import { useNavigate } from 'react-router-dom'

const Ticket = () => {
  const navigate = useNavigate()
  const [cardData, setCardData] = useState({ cardNo: '', cvv: '', email: '' })
  const [errors, setErrors] = useState({ cardNo: '', cvv: '', email: '' })
  const [isProcessing, setIsProcessing] = useState(false)

  const eventInfo = JSON.parse(localStorage.getItem('currentEvent'))

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

  const handleEmailChange = (e) => {
    const { value } = e.target
    setCardData({ ...cardData, email: value })
    // Validate email and set error message
    setErrors({
      ...errors,
      email: validateEmail(value)
        ? ''
        : 'Please provide a valid email address.',
    })
    setErrors({ ...errors, email: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = { cardNo: '', cvv: '', email: '' }
    if (!cardData.cardNo) {
      newErrors.cardNo = 'Please provide a card number.'
    }
    if (!cardData.cvv) {
      newErrors.cvv = 'Please provide the CVV.'
    }
    if (!validateEmail(cardData.email)) {
      newErrors.email = 'Please provide a valid email address.'
    }

    if (newErrors.cardNo || newErrors.cvv || newErrors.email) {
      setErrors(newErrors)
      return
    }

    setIsProcessing(true)
    axios
      .post(`${baseURL}/ticket/`, {
        email: cardData.email,
        event: eventInfo['id'],
      })
      .then((resp) => {
        console.log(resp)
        navigate('/ticket-complete')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
      <div className='w-[30rem] h-fit text-defaultText shadow-md p-3 rounded-md'>
        <header className='my-5'>
          <h3 className='text-3xl md:text-3xl text-center font-bold mb-2'>
            You are buying ticket for <br />
            <span className='text-bloodRed'>{eventInfo['name']}</span>
          </h3>
          <span className='text-bloodRed font-semibold font-andika text-xl italic '>
            <p>{`Date: ${formatDate(eventInfo['date'])}`}</p>
            <p>{`Fee: $${eventInfo['price']}`}</p>
          </span>
        </header>
        <form className='flex flex-col gap-5'>
          <label htmlFor='email' className='input-label'>
            <span>Email</span>
            <input
              className='input'
              name='email'
              id='email'
              placeholder='smilga@dancers4life.com'
              onChange={handleEmailChange}
              value={cardData.email}
            />
            {errors.email && <p className='text-bloodRed'>{errors.email}</p>}
          </label>
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

export default Ticket
