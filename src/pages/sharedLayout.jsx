import { Outlet } from 'react-router-dom'
import Top from '../components/Top'

const SharedLayout = () => {
  return (
    <div>
      <Top />
      <Outlet />
    </div>
  )
}

export default SharedLayout
