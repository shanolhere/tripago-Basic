import {useState, useEffect, useRef} from 'react'

export const useFetch = (url, _options) => {
  
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error, setError] = useState(null)
  
    const options = useRef(_options).current
    // use useRef to wrap an object/array argument
  // which is a useEffect dependency 

    useEffect(() => {
        console.log(options)
        const controller = new AbortController();
        const fetchData = async () => {
            setIsPending(true)
            try{
                const res = await fetch(url, {signal: controller.signal});
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json = await res.json();
                setIsPending(false)
                setData(json)
                setError(null)

            }
            catch(err){
                if(err.name === "AbortError"){
                   console.log("Fetch Aborted") 
                }
                else{
                setIsPending(false) 
                setError("could not fetch data")
                //console.log(err.message)
                }
                
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
        
    }, [url, options])

  return (
    {data, isPending, error}
  )
}

// export default useFetch