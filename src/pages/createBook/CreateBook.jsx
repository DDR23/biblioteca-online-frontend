import './index.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { IoIosCheckmarkCircle, IoMdRefresh } from 'react-icons/io'
import ButtonDefault from '../../components/buttonDefault/ButtonDefault'
import usePost from '../../services/usePost'
import { bookCreateSchema } from '../../schemas/bookCreateSchema'

export default function CreateBook() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(bookCreateSchema)
  })

  const [posted, setPosted] = useState(false)
  const [book, setBook] = useState('')

  const { isPosted, isPosting, error, error409 } = usePost(`${import.meta.env.VITE_BASE_URL}/books/create`, book, posted)

  const createOneBook = (book) => {
    setPosted(true)
    setBook(book)
  }

  useEffect(() => {
    if (isPosted || error) {
      setPosted(false)
    }
  }, [isPosted, error])

  if (error409) {
    return (
      <>
        <div className="createbook__posting">
          <p>Este ID já existe, tente outro</p>
          <div>
            <a href="/book/create"><IoMdRefresh size={30} /></a>
            <p>tentar novamente</p>
          </div>
        </div>
      </>
    )
  } else if (error){
    return (
      <>
        <div className="createbook__posting">
          <p>Houve um erro durante a criação</p>
          <div>
            <a href="/book/create"><IoMdRefresh size={30} /></a>
            <p>tentar novamente</p>
          </div>
        </div>
      </>
    )
  }

  if (isPosting) {
    return (
      <>
        <div className="createbook__posting">
          <p>Cadastrando...</p>
        </div>
      </>
    )
  }

  if (isPosted) {
    return (
      <>
        <div className="createbook__posting">
          <IoIosCheckmarkCircle className='success' />
          <p>Livro cadastrado!</p>
          <ButtonDefault link="/books" target="" largura="" name="Ver livros" />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="createbook">
        <div className='createbook__content'>
          <h2>Cadastro de Livros</h2>
          <form onSubmit={handleSubmit(createOneBook)}>
            <label>Id</label>
            <input {...register('id')} type="text"></input>
            {errors.id && (<span>{errors.id.message}</span>)}
            <label>Titulo</label>
            <input {...register('title')} type="text"></input>
            {errors.title && (<span>{errors.title.message}</span>)}
            <label>Número de Páginas</label>
            <input {...register('pages')} type="text"></input>
            {errors.pages && (<span>{errors.pages.message}</span>)}
            <label>ISBN</label>
            <input {...register('isbn')} type="text"></input>
            {errors.isbn && (<span>{errors.isbn.message}</span>)}
            <label>Editora</label>
            <input {...register('publisher')} type="text"></input>
            {errors.publisher && (<span>{errors.publisher.message}</span>)}
            <label>Descrição</label>
            <input {...register('sumary')} type="text"></input>
            <button type='submit' className='buttondefault'>Cadastrar Livro</button>
          </form>
        </div>
      </div>
    </>
  )
}