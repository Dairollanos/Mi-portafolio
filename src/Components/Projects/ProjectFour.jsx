import { Carousel, Typography } from "antd";
import {
  FundProjectionScreenOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ProjectFour = () => {
  const { Link } = Typography;

  const contentStyle = {
    border: "2px solid black",
  };

  return (
    <div className="project-four">
      <h2>
        BLOG APP (<strong>Javascript, React.js, Firebase</strong>)
      </h2>
      <h3 className="codigo-proyecto">
        <FundProjectionScreenOutlined />{" "}
        <Link href="https://react-blog-dallp.netlify.app/" target="_blank">
          Proyecto
        </Link>{" "}
        | <GithubOutlined />{" "}
        <Link href="https://github.com/Dairollanos/Blog-react/" target="_blank">
          Codigo
        </Link>
      </h3>
      <Carousel autoplay className="carrusel" dotPosition="top">
        <div>
          <img
            src="https://imgur.com/FzNDon0.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/S6cfHhQ.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/hNvfFAT.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/SEiX0K2.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/CuF9Er6.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
      </Carousel>
      <p>
        Sencilla aplicacion blog, permite a los usuarios registrarse mediante su
        correo y una contraseña. permite la creacion de blogs, eliminarlos,
        actualizar el correo del usuario y recuperar la contraseña
      </p>
      <h3>Caracteristicas del proyecto</h3>
      <ul>
        <li>Crear, eliminar y actualizar entradas de blog</li>
        <li>Sistema de registro, autenticacion mediante correo y contraseña</li>
        <li>
          Actualizacion del correo y recuperacion de la contraseña mediante
          correo
        </li>
        <li>Login mediante cuenta de google</li>
        <li>
          Manejo de la informacion entre componentes mediante el hook useContext
        </li>
        <li>Llamados a la API de firebase mediante el hook useEffect</li>
      </ul>
    </div>
  );
};

export default ProjectFour;
