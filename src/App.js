import logo from './media/logo.png'
import './styles/styles.css';
import ferrariStradle from './media/ferrariStradle.jpg'
import mercedesAMG from './media/mercedesAMG.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img className="logo" src={logo} alt="imagen"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                  <input placeholder="Buscar nuevo vehiculo"/>
                  <i className="fas fa-search iconoBusqueda"></i>
                  </div>
            </li>
            
            <li>
                <button className="button secundaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1 className="tituloCentrado">VEHICULOS</h1>
            <ul className="vehicleCardContainer">
                <li className="vehicleCard">
                  <div className="contenedorImagen">
                    <img src={ferrariStradle} alt="Ferrari Stradle"/>
                </div>
                <span className="vehicleTitle">Ferrari Stradle 2021</span>
                <div className="vehicleIcon">
                    <i className="fas fa-heart iconoCorazon"></i>
                    <i className="fas fa-shopping-cart iconoCart"></i>
                    <i className="fas fa-comment iconoComment"></i>
                </div>
                </li>
                <li className="vehicleCard">
                  <div className="contenedorImagen">
                    <img src={mercedesAMG} alt="Mercedes-Amg GT"/>
                  </div>
                  <span className="vehicleTitle">Mercedes-Amg GT</span>
                  <div className="vehicleIcon">
                    <i className="fas fa-heart iconoCorazon"></i>
                    <i className="fas fa-shopping-cart iconoCart"></i>
                    <i className="fas fa-comment iconoComment"></i>
                  </div>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
