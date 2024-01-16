import './index.scss'
import { useParams } from 'react-router-dom'
import CardBook from '../../components/cardBook.jsx/CardBook'
import useGet from '../../services/useGet'
import { IoMdRefresh } from 'react-icons/io'

export default function OneBook() {
  const bookId = useParams()
  const { data, isGeting, error } = useGet(`${import.meta.env.VITE_BASE_URL}/books/${bookId.id}`)
  const book = data


  if (error) {
    return(
      <>
        <div className="onebook__geting">
          <p>Houve um erro durante a busca</p>
          <div>
            <a href={`/book/${bookId.id}`}><IoMdRefresh size={30} /></a>
            <p>tentar novamente</p>
          </div>
        </div>
      </>
    )
  }

  if (isGeting) {
    return (
      <>
        <div className="onebook__geting">
          <p>Carregando...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="onebook">
        <CardBook book={book} />
      </div>
    </>
  )
}