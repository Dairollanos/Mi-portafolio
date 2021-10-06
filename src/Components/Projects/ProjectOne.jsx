import { Carousel, Typography } from "antd";
import {
  FundProjectionScreenOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ProjectOne = () => {
  const { Link } = Typography;

  const contentStyle = {
    border: "2px solid black",
  };

  return (
    <div className="project-one">
      <h2>
        BLOG (<strong>Django</strong>)
      </h2>
      <h3 className="codigo-proyecto">
        <FundProjectionScreenOutlined />{" "}
        <Link href="https://dairo.pythonanywhere.com/login/" target="_blank">
          Proyecto
        </Link>{" "}
        | <GithubOutlined />{" "}
        <Link href="https://github.com/Dairollanos/blog/" target="_blank">
          Codigo
        </Link>
      </h3>
      <Carousel autoplay className="carrusel" dotPosition="top">
        <div>
          <img
            src="https://imgur.com/XnKr1s6.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/E8mtQ4k.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/NASpaTW.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/7jNKVHo.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/lMoKRQY.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
      </Carousel>
      <p>
        Este proyecto consiste en un blog donde el usuario puede crear una
        cuenta, acceder a ella, subir y administrar sus post. <br />(
        <strong>
          Para acceder rapidamente usar la siguiente cuenta, Usuario: Admin,
          Contraseña: soyadmin1234
        </strong>
        )
      </p>
      <h3>Caracteristicas del proyecto</h3>
      <ul>
        <li>Registro de usuarios</li>
        <li>Login de usuarios</li>
        <li>Cambio de contraseña</li>
        <li>Perfil de usuario con imagen de perfil</li>
        <li>Crear, editar y eliminar tus propios post</li>
        <li>Comentarios por posts</li>
        <li>Recomendacion de posts similares</li>
        <li>Tags por posts</li>
        <li>Filtrado de posts por medio de tags</li>
        <li>Posts mas comentados y ultimos posts</li>
        <li>Paginacion</li>
      </ul>
    </div>
  );
};

export default ProjectOne;
