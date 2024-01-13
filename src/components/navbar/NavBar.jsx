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


{/* 
  <Link to='/'>Home</Link>
  <Link to='/books'>Livros</Link>
  <Link to={`/book/${id}`}>onebooks</Link>
  <Link to='/book/create'>createbook</Link>
  <Link to={`/book/update/${id}`}>updatebook</Link>
*/}