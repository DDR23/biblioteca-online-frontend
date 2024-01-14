import { Link, useParams } from 'react-router-dom'
import './index.scss'
import { FiEdit, FiMenu, FiTrash } from "react-icons/fi"
import { useState } from 'react'

export default function CardBook({ link, book }) {
  

  // console.log(book.sumary)
  // console.log(bookId)
  return (
    <>
      {!link ? (
        <div className='cardbook'>
          <div className="cardbook__details">
            <span>ID:{book.id}</span>
            <h2>{book.title}</h2>
            <p><span>Autor:</span>{book.publisher}</p>
            <p><span>Código ISBN:</span>{book.isbn}</p>
            <p><span>Número de páginas:</span>{book.pages}</p>
            {book.sumary &&
              <>
                <span>Descrição:</span>
                <div className="cardbook__details--sumary">
                  <p>{book.sumary}</p>
                </div>
              </>
            }
          </div>
          <div className="cardbook__btnshow">
            <FiEdit size={23} />
            <FiTrash size={23} />
          </div>
        </div>
      ):(
        <Link to={link} className='cardbookpreview'>
          <div className="cardbookpreview__details">
            <h2>{book.title}</h2>
            <span>{book.publisher}</span>
          </div>
          <div className="cardbookpreview__btnshow">
            <FiMenu size={23} />
          </div>
        </Link>
      )}
    </>
  )
}