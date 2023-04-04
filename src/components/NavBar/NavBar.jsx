import CartWidget from "../CartWidget/CartWidget";
import estilos from "./NavBar.module.css";
import imgLogo from "../assets/img/favicon1.png"

const NavBar = () => {
  return (
    <div className={estilos.containerNavbar}>
      
      <img src={imgLogo} alt="Logo de la Empresa" />

      <ul className={estilos.listaNavbar}>
        <li>Home</li>
        <li>Nosotros</li>
        <li>Productos</li>
      </ul>

      <CartWidget/>
    </div>
  );
};

export default NavBar;
