import axios from "axios"
import { useEffect, useState } from "react"

export default function usePost(url, body, posted) {
  const [data, setData] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')
  const [error409, setError409] = useState(false)

  useEffect(() => {
    if (posted){
      setIsPosting(true)
      axios.post(url, body)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        if (err.response.status === 409){
          setError409(true)
        }
        setError(err)
      })
      .finally(() => {
        setIsPosting(false)
      })
    }
  }, [posted])
  
  return { data, isPosting, error, error409 }
}