import Header from "../Componentes/Header.jsx";
import Footer from "../Componentes/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
