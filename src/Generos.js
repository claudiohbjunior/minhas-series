import React, {useState, useEffect} from "react";  
import axios from 'axios'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('./api/genres')
        .then(res => {
            setData(res.data.data)
        })
    }, [])
    return (
    <div>
    <h1>Generos</h1>
    <pre>{JSON.stringify(data)}</pre>
    </div>
    )
  }

  export default Generos
  