import './index.scss'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { IoCloseCircleOutline } from 'react-icons/io5'
import useDelete from '../../services/useDelete'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export default function ModalDelete({ isOpen, isClose }) {
  const bookId = useParams()
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate()

  const navigateClick = () => {
    navigate('/books')
  }
  
  const handleDelete = () => {
    setIsDelete(true)
  }
  
  const { isDeleted, isDeleting, error } = useDelete(`${import.meta.env.VITE_BASE_URL}/books/delete/${bookId.id}`, isDelete)
  
  useEffect(() => {
    if ( error) {
      setIsDelete(false)
    }
  }, [error])


  if (isOpen){
    if(error){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={navigateClick} />
              </div>
              <div className="modal__content--error">
                <p>Não foi possível deletar o livro</p>
                <p>tente novamente</p>
              </div>
            </div>
          </div>
        </>
      )
    }
    if(isDeleting){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={() => isClose(!isOpen)} />
              </div>
              <div className='modal__content--deleting'>
                <p>apagando...</p>
              </div>
            </div>
          </div>
        </>
      )
    }
    if(isDeleted){
      return(
        <>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content--close">
                <IoCloseCircleOutline size={23} onClick={navigateClick} />
              </div>
              <div className='modal__content--deleted'>
                <IoIosCheckmarkCircle className='success' />
                <p>Livro apagado com sucesso!</p>
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
            <div className="modal__content--confirm">
              <p>Confirme para apagar esse livro!</p>
              <div className="modal__content--yorn">
                <button className="buttondefault" onClick={handleDelete}>sim</button>
                <button className="buttondefault" onClick={() => isClose(!isOpen)}>nao</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}