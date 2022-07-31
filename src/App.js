//LEMBRAR DE RODAR O node .\node_modules\minhas-series-server\index.js

import React, { useState, useEffect }from "react";    

import Home from "./Home";
import Header from "./Header";
import Generos from "./Generos";
import NovoGenero from "./NovoGenero";
import axios from 'axios'
import EditarGenero from "./EditarGenero";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'





function App() {
  const [data, setData] = useState({})
  useEffect(() =>{
    axios.get('/api').then(res =>{
      setData(res.data)
    }) 
    
  }, [])

  return (
    <Router>
    <div>
        <Header />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/generos/:id" exact element={<EditarGenero />} />
        <Route path="/generos/novo" exact element={<NovoGenero />} />
        <Route path="/generos" exact element={<Generos />} />
        </Routes>
        <pre>{JSON.stringify(data)}</pre>
    </div>
    </Router>
    
  );
}

export default App;
