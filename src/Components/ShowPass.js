import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowPass = () => {
  const url = "https://badboibackend.onrender.com/api/adminShow"
  const [data, setData] = useState()

    const handleShowPass = () => {
        axios.get(url).then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }

    useEffect(() => {
        handleShowPass()
    }, [])


  return (
    <div>
      <h1>Email: donniescarcarellc@outlook.com</h1>
      <h3>Password: {data}</h3>
    </div>
  )
}

export default ShowPass
