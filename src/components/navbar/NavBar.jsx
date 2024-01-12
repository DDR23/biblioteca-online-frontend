import './index.scss'
import { Link } from 'react-router-dom'

export default function NavBar({ id }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src="/assets/logo.png" alt="logo DNC" />
        </div>
        <div className="navbar__links">
          <Link to='/'>Home</Link>
          <Link to='/books'>Livros</Link>
        </div>
      </div>
    </>
  )
}


{/* 
  <Link to={`/book/${id}`}>onebooks</Link>
  <Link to='/book/create'>createbook</Link>
  <Link to={`/book/update/${id}`}>updatebook</Link>
*/}