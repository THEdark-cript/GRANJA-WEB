import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import Main from './Componentes/Main.jsx';
import Route1 from './Views/Route1.jsx';
import Route2 from './Views/Route2.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* rota principal */}
          <Route index element={<Main />} />
          {/* rotas extras */}
          <Route path="route1" element={<Route1 />} />
          <Route path="route2" element={<Route2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
