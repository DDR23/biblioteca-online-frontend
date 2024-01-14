import './index.scss'
import { FiMenu } from "react-icons/fi"

export default function CardBook({ title, publisher}) {
  return (
    <>
      <div className="cardbook">
        <h2>{title}</h2>
        <span>{publisher}</span>
        <div className="cardbook__show">
          <FiMenu size={23} />
        </div>
      </div>
    </>
  )
}



{/* <FiEdit />
<FiTrash />
<FiInfo />

<FiEye /> */}