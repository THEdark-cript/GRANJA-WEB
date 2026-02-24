import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import Main from './Componentes/Main.jsx';
import Route1 from './Views/Route1.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* rota principal */}
          <Route index element={<Main />} />
          {/* rotas extras */}
          <Route path="route1" element={<Route1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
