import axios from "axios"
import { useEffect, useState } from "react"

export default function usePost(url, body, posted) {
  const [data, setData] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (posted){
      setIsPosting(true)
      console.log('posted data', body)
      axios.post(url, body)
      .then(res => {
        console.log('response', res)
        setData(res.data)
      })
      .catch(err => {
        setError(err)
        console.log('error', err)
      })
      .finally(() => {
        setIsPosting(false)
      })
    }
  }, [posted])
  
  return { data, isPosting, error }
}