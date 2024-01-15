import './index.scss'
import { useForm } from 'react-hook-form'
import { bookSchema } from '../../schemas/bookSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5"
import useDelete from '../../services/useDelete'
import { useParams } from 'react-router'

export default function Modal({ isOpen, isClose }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(bookSchema)
  })

  const updateOneBook = (book) => {
    setPosted(true)
    setBook(book)
  }

  


  if (null) {
    return (
      <>
      </>
    )
  }

  if (isOpen) {
    return (
      <>
        <div className="modal">
          <div className="modal__content">
            <div className="modal__content--close">
              <IoCloseCircleOutline size={23} onClick={() => isClose(!isOpen)} />
            </div>
            <form onSubmit={handleSubmit(updateOneBook)}>
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
  } else {
    return <></>
  }
}