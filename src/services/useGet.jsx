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


// const { data, isGeting, error } = useGet("url")







// import axios from "axios";

// const BASE_URL = "http://localhost:3000"

// export class LivrosService{
//     static getLivros(){
//         return axios.get(BASE_URL+'/livros');
//     }

//     static getLivro(id){
//         return axios.get(`${BASE_URL}/livros/${id}`);
//     }

//     static createLivro(body){
//         return axios.post(`${BASE_URL}/livros`,body);
//     }

//     static updateLivro(id,body){
//         return axios.put(`${BASE_URL}/livros/${id}`,body);
//     }

//     static deleteLivro(id){
//         return axios.delete(`${BASE_URL}/livros/${id}`);
//     }
    
// }