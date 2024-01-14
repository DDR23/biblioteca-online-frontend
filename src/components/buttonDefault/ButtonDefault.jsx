import { Link } from 'react-router-dom'
import './index.scss'

export default function ButtonDefault({ link, target, largura, name }) {
  return (
    <>
      {link ? (
        <Link to={`${link}`} target={target}>
          <button style={{ width: largura }} className="buttondefault" type='button'>{name}</button>
        </Link>
      ) : (
        <button disabled style={{ width: largura }} className="buttondisabled" type='button'>{name}</button>
      )}
    </>
  )
}


// <ButtonDefault link="" target="" largura="" name="" />