import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isPending, setIsPending] = useState()
    const [error, setError] = useState()

      useEffect(() => {
        const fetchData = async() => {
            setIsPending(true)
            try{
              const response = await fetch(url)
              if(!response.ok) {
                throw new Error(`HTTP: ${response.status} Network error occured pleased refresh and try again`)
              }
              const fetchedData = await response.json()
              setData(fetchedData)
              setIsPending(false)
              setError(null)
            } catch (err) {
              setError(err.message)
            }
          }
        fetchData() 
      }, [url])

      return {data, isPending, error}
}

export default useFetch