import { Link } from 'react-router-dom'
import './index.scss'

export default function NavBar({ id }) {
  return (
    <>
      <div className="navbar">
        <p>minha navbar</p>
        <div className="links">
        <Link to='/books'>allbooks</Link>
        <Link to={`/book/${id}`}>onebooks</Link>
        <Link to='/book/create'>createbook</Link>
        <Link to={`/book/update/${id}`}>updatebook</Link>
        </div>
      </div>
    </>
  )
}