import './index.scss'
import useGet from '../../services/useGet'
import { IoMdRefresh } from "react-icons/io"
import CardBook from '../../components/cardBook.jsx/CardBook'
import ButtonCreate from '../../components/buttonCreate/ButtonCreate'

export default function AllBooks() {
  const { data, isGeting, error } = useGet("https://desafio05escoladnc.vercel.app/books")
  const books = data.books

  if (error) {
    <>
      <div className="allbooks__geting">
        <p>Houve um erro durante a busca</p>
        <div>
          <a href="/books"><IoMdRefresh size={30} /></a>
          <p>tentar novamente</p>
        </div>
      </div>
    </>
  }

  if (isGeting || !data) {
    return (
      <>
        <div className="allbooks__geting">
          <p>Carregando...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="allbooks">
        <div className="allbooks__content">
          {books.map((book, index) => (
            <CardBook key={index} title={book.title} publisher={book.publisher} />
          ))}
        </div>
      </div>
      <div className="buttoncreatebook">
        <ButtonCreate />
      </div>
    </>
  )
}