//LEMBRAR DE RODAR O node .\node_modules\minhas-series-server\index.js

import React from "react";    

import Home from "./Home";
import Header from "./Header";
import Generos from "./Generos";
import NovoGenero from "./NovoGenero";
import EditarGenero from "./EditarGenero";
import Series from "./Series";
import NovaSerie from "./NovaSerie";
import InfoSerie from "./InfoSerie";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {

  return (
    <Router>
    <div>
        <Header />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/generos" exact element={<Generos />} />      
        <Route path="/generos/novo" exact element={<NovoGenero />} />  
        <Route path="/generos/:id" exact element={<EditarGenero />} /> 
        <Route path="/series" exact element={<Series />} /> 
        <Route path="/series/novo" exact element={<NovaSerie />} /> 
        <Route path="/series/:id" exact element={<InfoSerie />} />
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
