import { useState, useEffect } from "react"
import { API_KEY } from "./config"

const useFetch = (url) => {
  const [response, setResponse] = useState({ data: null, loading: true })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${url}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        setResponse({ ...response, data: result, loading: false })
      })
      .catch((err) => {
        setError(err)
        setResponse({ ...response, loading: false })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { response, error }
}

export default useFetch
