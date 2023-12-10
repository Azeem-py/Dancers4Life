import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL } from '../data/global'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('currentClass')
    localStorage.removeItem('currentEvent')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const validateEmail = (email) => {
    // Simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let hasErrors = false
    const newErrors = { ...errors }

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `Please provide ${
          field === 'name' ? 'a' : 'an'
        } ${field}.`
        hasErrors = true
      }
    })

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.'
      hasErrors = true
    }

    if (formData.password !== formData.password2) {
      newErrors.password2 = 'Passwords do not match.'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    // If all validations pass, you can proceed with your login logic
    console.log('Login successful')

    axios
      .post(`${baseURL}/auth/signup/`, formData)
      .then((resp) => {
        if (resp.status === 201) navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
      <section className='w-[30rem] h-[40rem] shadow-lg px-5 py-8'>
        <header className='mb-3'>
          <h3 className='md:text-4xl text-3xl text-center font-bold'>
            Sign Up
          </h3>
        </header>
        <form className='flex flex-col gap-3'>
          <label htmlFor='fullname' className='input-label'>
            <span>Fullname</span>
            <input
              placeholder='John Smilga'
              type='text'
              id='fullname'
              name='name'
              className='input'
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
          </label>
          <label htmlFor='email' className='input-label'>
            <span>Email</span>
            <input
              placeholder='smilga@dancers4life.com'
              type='email'
              id='email'
              name='email'
              className='input'
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </label>
          <label htmlFor='password' className='input-label'>
            <span>Password</span>
            <input
              placeholder='Password'
              type='password'
              id='password'
              name='password'
              className='input'
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password}</p>
            )}
          </label>
          <label htmlFor='password2' className='input-label'>
            <span>Confirm Password</span>
            <input
              placeholder='Confirm Password'
              type='password'
              id='password2'
              name='password2'
              className='input'
              value={formData.password2}
              onChange={handleInputChange}
            />
            {errors.password2 && (
              <p className='text-red-500'>{errors.password2}</p>
            )}
          </label>
          <footer
            className='text-bloodRed font-semibold cursor-pointer'
            onClick={() => navigate('/login')}
          >
            <p>
              Already a user? <span>Login</span>
            </p>
          </footer>
          <button
            className='px-2 py-3 bg-[#fe9f0d] text-3xl rounded shadow-md'
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </section>
    </div>
  )
}

export default Signup
