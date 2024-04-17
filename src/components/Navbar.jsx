import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../App'; // Importa el archivo de estilos CSS

const TopNav = () => {
  return (
    <div className="navbar">
      <Link to="/foto" className="nav-link">Foto</Link> {/* Usa Link en lugar de <a> */}
      <Link to="/video" className="nav-link">Video</Link>
      <Link to="/3d" className="nav-link">3D</Link>
      <Link to="/codigo" className="nav-link">Código</Link>
    </div>
  );
};

export default TopNav;

