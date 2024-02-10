/* eslint-disable */
//import { Router } from "express";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { PageListMateriels } from "./components/PageListMateriels";
import { PageEmprunt } from "./components/PageEmprunt";
import { GestioRetour } from "./components/gestionRetour";
import { GestionDispo } from "./components/gestionDispo";

function App() {

  

  return (
    <Router>
      {/* <Route path="/" element={<PageListMateriels></PageListMateriels>}></Route> */}
      <Routes>
          <Route path="/" element={<PageListMateriels></PageListMateriels>}></Route>
          <Route path="/nouveauMateriel/:id" element={<PageEmprunt></PageEmprunt>}></Route>
          <Route path="/retourMateriel/:id" element={<GestioRetour></GestioRetour>}></Route>
          <Route path="/passageDispo/:id" element={<GestionDispo></GestionDispo>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
