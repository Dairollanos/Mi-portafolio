import { Carousel, Typography } from "antd";
import {
  FundProjectionScreenOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ProjectThree = () => {
  const { Link } = Typography;

  const contentStyle = {
    border: "2px solid black",
    "object-fit": "cover",
  };

  return (
    <div className="project-three">
      <h2>
        QUIZ APP (<strong>Javascript, React.js</strong>)
      </h2>
      <h3 className="codigo-proyecto">
        <FundProjectionScreenOutlined />{" "}
        <Link href="https://react-quiz-dallp.netlify.app/" target="_blank">
          Proyecto
        </Link>{" "}
        | <GithubOutlined />{" "}
        <Link href="https://github.com/Dairollanos/Quiz-react/" target="_blank">
          Codigo
        </Link>
      </h3>
      <Carousel autoplay className="carrusel" dotPosition="top">
        <div>
          <img
            src="https://imgur.com/C7UMsEM.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/OIENWqn.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/QFKoJ7L.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/LPSz3Xk.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
      </Carousel>
      <p>
        El proyecto consiste en una sencilla aplicacion de preguntas con
        diferentes opciones (Numero de preguntas, categoria y dificultad).
      </p>
      <h3>Caracteristicas del proyecto</h3>
      <ul>
        <li>Llamados a la API mediante el hook useEffect</li>
        <li>
          Manejo de la informacion entre componentes mediante el hook useContext
        </li>
        <li>Las opciones de respuesta se muestra aleatoriamente cada vez</li>
      </ul>
    </div>
  );
};

export default ProjectThree;
