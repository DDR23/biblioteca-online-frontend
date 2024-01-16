import axios from "axios"
import { useEffect, useState } from "react"

export default function useUpdate(url, book, posted) {
  const [isUpdated, setUpdated] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (posted){
      setIsUpdating(true)
      axios.put(url, book)
      .then(res => {
        setUpdated(true)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsUpdating(false)
      })
    }
  }, [posted])
  
  return { isUpdated, isUpdating, error }
}