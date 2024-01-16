import './index.scss'
import { Link, useParams } from 'react-router-dom'
import { FiEdit, FiMenu, FiTrash } from "react-icons/fi"
import { useState } from 'react'
import ModalEdit from '../modals/ModalEdit'
import ModalDelete from '../modals/modalDelete'

export default function CardBook({ link, book }) {
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

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
            <span>Descrição:</span>
            <div className="cardbook__details--sumary">
              {book.sumary &&
                <>
                  <p>{book.sumary}</p>
                </>
              }
            </div>
          </div>
          <div className="cardbook__btnshow">
            <FiEdit size={23} onClick={() => setOpenModalEdit(!openModalEdit)} />
            <FiTrash size={23} onClick={() => setOpenModalDelete(!openModalDelete)} />
          </div>
          <div className="cardbook__modals">
            <ModalEdit isOpen={openModalEdit} isClose={setOpenModalEdit} bookdata={book} />
            <ModalDelete isOpen={openModalDelete} isClose={setOpenModalDelete} />
          </div>
        </div>
      ) : (
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