import { LinkedinFilled } from "@ant-design/icons";
import { Typography } from "antd";

const Contactar = () => {
  const { Link } = Typography;

  return (
    <div className="contactar">
      <div className="section">
        <h2>CONTACTAME</h2>
      </div>
      <div className="contactar-content content-style">
        <ul>
          <li>
            <strong>Correo Electronico:</strong> dairoollanos@gmail.com
          </li>
          <li>
            <strong>Telefono:</strong> 3024576840
          </li>
          <li>
            <strong>
              <LinkedinFilled />{" "}
              <Link
                href="https://www.linkedin.com/in/dairo-llanos-perdomo"
                target="_blank"
              >
                Linkedin
              </Link>
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contactar;
