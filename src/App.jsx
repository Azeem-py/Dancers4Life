import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/sharedLayout'
import Home from './pages/Home'
import Dance from './pages/Dance'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/dance-class' element={<Dance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
