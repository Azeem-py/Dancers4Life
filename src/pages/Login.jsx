import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { baseURL } from '../data/url'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../functions/validateEmail'
import { AuthState } from '../data/global'

const Login = () => {
  useEffect(() => {
    localStorage.removeItem('currentClass')
    localStorage.removeItem('currentEvent')
  }, [])
  const navigate = useNavigate()
  const { setIsAuth } = useContext(AuthState)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
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

    if (formData.username && !validateEmail(formData.username)) {
      newErrors.username = 'Please provide a valid email address.'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    // If all validations pass, you can proceed with your login logic
    console.log('Login successful')
    axios
      .post(`${baseURL}/auth/login/`, formData)
      .then((resp) => {
        const token = resp.data['token']
        localStorage.setItem('token', token)
        setIsAuth(true)
        axios
          .get(`${baseURL}/auth/getID/`, {
            headers: { Authorization: `Token ${token}` },
          })
          .then((resp) => {
            const id = resp.data['id']
            localStorage.setItem('user', id)
          })
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.status)
        if (err.response.status === 400) {
          newErrors.password = 'Incorrect email or password'
          hasErrors = true
          setErrors(newErrors)
        }
      })
  }

  return (
    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
      <section className='w-[30rem] h-[30rem] shadow-lg px-5 py-8'>
        <header className='mb-3'>
          <h3 className='md:text-4xl text-3xl text-center font-bold'>Login</h3>
        </header>
        <form className='flex flex-col gap-3'>
          <label htmlFor='email' className='input-label'>
            <span>Email</span>
            <input
              placeholder='smilga@dancers4life.com'
              type='email'
              id='email'
              name='username'
              className='input'
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.username && (
              <p className='text-red-500'>{errors.username}</p>
            )}
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

          <footer className='text-bloodRed font-semibold '>
            <p onClick={() => navigate('/signup')} className='cursor-pointer'>
              Don't have an account <span>Sign up</span>
            </p>
          </footer>
          <button className='formBtn' onClick={handleSubmit}>
            Login
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login
