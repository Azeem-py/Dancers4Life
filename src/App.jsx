import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/sharedLayout'
import Home from './pages/Home'
import Dance from './pages/Dance'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Events from './pages/Events'
import Enroll from './pages/Enroll'
import Ticket from './pages/Tickets'
import EnrollComplete from './pages/EnrollComplete'
import TicketComplete from './pages/TicketComplete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/dance-class' element={<Dance />} />
          <Route path='/events' element={<Events />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/enroll' element={<Enroll />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/enroll-complete' element={<EnrollComplete />} />
          <Route path='/ticket-complete' element={<TicketComplete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
