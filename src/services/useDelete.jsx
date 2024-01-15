import axios from "axios";
import { useEffect, useState } from "react";

export default function useDelete(url, isDelete) {
  const [isDeleted, setIsDeleted] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isDelete === true){
      setIsDeleting(true)
      axios.delete(url)
        .then(() => {
          setIsDeleted(true)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setIsDeleting(false)
        })
    }
  }, [isDelete])

  return { isDeleted, isDeleting, error }
}