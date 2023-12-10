import { PiGraduationCapFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const EnrollComplete = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center font-andika'>
      <section className='w-[30rem] flex flex-col items-center justify-center shadow-lg rounded-lg px-3 py-5 text-defaultText'>
        <span className='text-[20rem] text-center '>
          <PiGraduationCapFill />
        </span>
        <h4 className=' text-center font-bold text-2xl md:text-3xl'>
          Your Enroll is Complete!
        </h4>
        <button className='formBtn mt-2' onClick={() => navigate('/')}>
          Okay!
        </button>
      </section>
    </div>
  )
}

export default EnrollComplete
