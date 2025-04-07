import React, { useEffect, useState } from 'react'

const ReactLifeCycle4 = () => {
  const [querySearch, setQuerySearch] = useState('*')
  const [result, setResult] = useState([])

  const fetchApi = async () => {
    const url = `https://demo.dataverse.org/api/search?q=${querySearch}=100`
    const res = await fetch(url)
    if (!res.ok) throw new Error('res is not ok')
    const data = await res.json()
    setResult(data.data.items)
    // console.log('data',data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (

    <>
      <div>Result  Search:</div>
      <input type="text" onChange={(e) => setQuerySearch(e.target.value)} />
      <ul>
        {
          result.map((item,index) => (
            <li key={index}>{item.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default ReactLifeCycle4