import React from "react";
import NavBar from "./main.jsx";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      {/* ...otros componentes y contenido... */}
    </div>
  );
}

export default App;
