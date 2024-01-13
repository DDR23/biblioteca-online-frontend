import { FiPlusCircle } from 'react-icons/fi'
import './index.scss'
import { Link } from 'react-router-dom'

export default function ButtonCreate() {
  return (
    <>
      <Link to='/book/create'>
        <div className="buttoncreate">
          <FiPlusCircle size={30} />
        </div>
      </Link>
    </>
  )
}