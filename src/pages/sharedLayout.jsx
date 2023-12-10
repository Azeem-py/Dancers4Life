import { Outlet } from 'react-router-dom'
import Top from '../components/Top'
import { useState } from 'react'
import { AuthState } from '../data/global'

const SharedLayout = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthState.Provider value={{ isAuth, setIsAuth }}>
      <div>
        <Top />
        <Outlet />
      </div>
    </AuthState.Provider>
  )
}

export default SharedLayout
