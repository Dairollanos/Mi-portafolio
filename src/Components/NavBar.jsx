import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="site-tittle">
          <h1 className="nav-title">DALLP</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/proyectos" className="nav-link">
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
