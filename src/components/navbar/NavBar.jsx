import './index.scss'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to='/'><img src="/assets/logo.png" alt="logo DNC" /></Link>
        <Link to='/books'><p>livros</p></Link>
      </div>
    </>
  )
}