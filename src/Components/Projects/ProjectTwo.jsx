import { Carousel, Typography } from "antd";
import {
  FundProjectionScreenOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ProjectTwo = () => {
  const { Link } = Typography;

  const contentStyle = {
    border: "2px solid black",
  };

  return (
    <div className="project-two">
      <h2>
        E-COMMERCE (<strong>Django</strong>)
      </h2>
      <h3 className="codigo-proyecto">
        <FundProjectionScreenOutlined />{" "}
        <Link href="http://xdairo.pythonanywhere.com/" target="_blank">
          Proyecto
        </Link>{" "}
        | <GithubOutlined />{" "}
        <Link href="https://github.com/Dairollanos/E-commerce/" target="_blank">
          Codigo
        </Link>
      </h3>
      <Carousel autoplay className="carrusel" dotPosition="top">
        <div>
          <img
            src="https://imgur.com/lGIyUsZ.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/U1NJZht.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/EcBzsqH.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/t2xTNUd.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://imgur.com/zlZZwFg.png"
            alt="proyecto 1-1"
            style={contentStyle}
          />
        </div>
      </Carousel>
      <p>
        El proyecto consiste en una tienda onlie donde el usuario puede agregar
        productos a su carrito, para finalizar la compra tendra que registrarse.
        Si el usuario es “comprador” podra ver y comprar todos los productos que
        desee, si es “Vendedor” ademas de lo anterior, podra tambien agregar
        nuevos productos. los pagos se hacen mediante Paypal. <br />(
        <strong>
          Para acceder rapidamente usar la siguiente cuenta, Usuario: Admin,
          Contraseña: soyadmin1234. <br /> Usar la siguiente cuenta de paypal
          para terminar los pagos, E-mail: personaldallp@gmail.com, Contraseña:
          pruebapaypal
        </strong>
        )
      </p>
      <h3>Caracteristicas del proyecto</h3>
      <ul>
        <li>Registro de usuarios</li>
        <li>Login de usuarios</li>
        <li>Cambio de contraseña</li>
        <li>Carrito de compras (Usando Django Sessions)</li>
        <li>Crear nuevos productos</li>
        <li>Editar tus propios productos</li>
        <li>Filtrado de productos por categorias</li>
        <li>Sistema de pagos usando Paypal</li>
        <li>Detalles de los pedidos disponibles para descargar en PDF</li>
      </ul>
    </div>
  );
};

export default ProjectTwo;
