import './index.scss'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'

export default function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}