import axios from "axios"
import { useEffect, useState } from "react"

export default function useGet(url) {
  const [data, setData] = useState('')
  const [isGeting, setIsGeting] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsGeting(false)
      })
  }, [])

  return { data, isGeting, error }
}