const Home = () => {
  return (
    <div>
      <div className="home-presentacion">
        <h1 className="home-title">Dairo Llanos</h1>
        <p className="home-description">
          Ingeniero de sistemas | Desarrollador Web
        </p>
      </div>
      <div className="home-perfil-laboral section">
        <h2>PERFIL LABORAL</h2>
      </div>
      <div className="home-perfil-laboral-content content-style">
        <ul>
          <li>
            Capacidad para crear aplicaciones, paginas web y APIs utilizando
            diferentes metodologias, y buenas practicas.
          </li>
          <li>
            Conocimientos en tecnologias para el{" "}
            <strong>desarrollo backend</strong> (Python, Django, DRF, Bases de
            datos SQL).
          </li>
          <li>
            Conocimientos en tecnologias para el{" "}
            <strong>desarrollo frontend</strong> (Javascript, React, Vue,
            Redux).
          </li>
        </ul>

        <div className="home-perfil-laboral-tecnologias">
          <div className="backend-tec">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
              alt="Python"
            />
            <img
              src="https://www.w3programmers.com/wp-content/uploads/2015/09/django-500x264.png"
              alt="Django"
            />
            <img
              src="https://cms-assets.tutsplus.com/uploads/users/45/posts/19786/preview_image/django-rest-framework-wide-retina-preview.gif"
              alt="Django-Rest-Framework"
            />
            <img
              src="https://i1.wp.com/windtux.com/wp-content/uploads/2019/10/postgresql.png?fit=700%2C500&ssl=1"
              alt="Postgresql"
            />
          </div>
          <div className="frontend-tec">
            <img
              src="https://pluspng.com/img-png/logo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png"
              alt="Javascript"
            />
            <img
              src="https://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"
              alt="ReactJS"
            />
            <img
              src="https://www.vshsolutions.com/wp-content/uploads/2020/05/vuejs-300x300.png"
              alt="VueJS"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              alt="Redux"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
