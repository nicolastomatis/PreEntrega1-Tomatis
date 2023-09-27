import React from "react";
import CartWidget from "./CartWidget"; // Importa CartWidget

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Inicio
        </a>
        <a className="navbar-brand" href="#">
          Revista
        </a>
        <a className="navbar-brand" href="#">
          Tienda
        </a>
        <a className="navbar-brand" href="#">
          Contacto
        </a>
        <CartWidget /> {/* Agrega el componente CartWidget aquí */}
        {/* ...otros elementos del Navbar... */}
      </div>
    </nav>
  );
}

export default NavBar;
