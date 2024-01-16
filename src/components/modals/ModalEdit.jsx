import './index.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5"
import { useNavigate, useParams } from 'react-router'
import { bookUpdateSchema } from '../../schemas/bookUpdateSchema'
import useUpdate from '../../services/useUpdate'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export default function Modal({ isOpen, isClose, bookdata }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(bookUpdateSchema)
  })

  const bookExist = bookdata
  const navigate = useNavigate()
  const bookId = useParams()
  const [posted, setPosted] = useState(false)
  const [book, setBook] = useState('')

  const { isUpdated, isUpdating, error } = useUpdate(`${import.meta.env.VITE_BASE_URL}/books/update/${bookId.id}`, book, posted)

  const updateOneBook = (book) => {
    const filteredBook = Object.fromEntries(Object.entries(book).filter(([key, value]) => value !== ''))
    setPosted(true)
    setBook(filteredBook)
  }

  useEffect(() => {
    if (isUpdated || error) {
      setPosted(false)
    }
  }, [isUpdated, error])

  const navigateBook = () => {
    navigate(`/book/${bookId.id}`)
    window.location.reload()
  }

  const navigateBooks = () => {
    navigate(`/books`)
  }

  if (isOpen) {
    if(error){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={navigateBooks} />
              </div>
              <div className="modal__content--error">
                <p>Não foi possível editar o livro</p>
                <p>tente novamente</p>
              </div>
            </div>
          </div>
        </>
      )
    }
    if(isUpdating){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={() => isClose(!isOpen)} />
              </div>
              <div className='modal__content--deleting'>
                <p>alterando...</p>
              </div>
            </div>
          </div>
        </>
      )
    }
    if(isUpdated){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={navigateBook} />
              </div>
              <div className='modal__content--deleted'>
                <IoIosCheckmarkCircle className='success' />
                <p>Livro editado com sucesso!</p>
              </div>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="modal">
          <div className="modal__content">
            <div className="modal__content--close">
              <IoCloseCircleOutline size={23} onClick={() => isClose(!isOpen)} />
            </div>
            <form onSubmit={handleSubmit(updateOneBook)} >
              <p>Preencha os campos que deseja </p>
              <label>Id</label>
              <input {...register('id')} type="text" value={bookExist.id} disabled></input>
              {errors.id && (<span>{errors.id.message}</span>)}
              <label>Titulo</label>
              <input {...register('title')} type="text" defaultValue={bookExist.title}></input>
              <label>Número de Páginas</label>
              <input {...register('pages')} type="text" defaultValue={bookExist.pages}></input>
              {errors.pages && (<span>{errors.pages.message}</span>)}
              <label>ISBN</label>
              <input {...register('isbn')} type="text" defaultValue={bookExist.isbn}></input>
              {errors.isbn && (<span>{errors.isbn.message}</span>)}
              <label>Editora</label>
              <input {...register('publisher')} type="text" defaultValue={bookExist.publisher}></input>
              <label>Descrição</label>
              <textarea {...register('sumary')} type="text" rows={5} defaultValue={bookExist.sumary}></textarea>
              <button type='submit' className='buttondefault'>Editar Livro</button>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}