import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const EditarGenero = () =>{
    const params = useParams()

    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
        .get('/api/genres/' + params.id)
        .then(res => {
            setName(res.data.name)
        })
    }, [params.id]) 

    console.log(params)

    

    

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .put('/api/genres/' + params.id, {
            name
        })
        .then(res => {
           setSuccess(true)
        })
    }
    if (success) {
        return <Navigate to="/generos" />
    }
    return (
        <div className="container">
            <h1>Editar Genêro</h1>
            <form>
            <div className="form-group">
            <label for="name">Nome</label>
            <input type="text" value={name} onChange={onChange} className="form-control" id="name" placeholder="Nome do Genero" />
        </div>
            <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero