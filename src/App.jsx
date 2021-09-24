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
              <CardVehicles vehicleTitle= "Ferrari Stradle" imagen={ferrariStradle}/>
              <CardVehicles vehicleTitle= "Mercedes AMG GT" imagen={mercedesAMG}/>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

function CardVehicles({vehicleTitle, imagen}){
  return(
  <li className="vehicleCard">
    <div className="contenedorImagen">
      <img src={imagen} alt= {vehicleTitle}/>
    </div>
    <span className="vehicleName">{vehicleTitle}</span>
    <div className="cardIcon">
        <i className="fas fa-heart iconoCorazon"></i>
        <i className="fas fa-shopping-cart iconoCart"></i>
        <i className="fas fa-comment iconoComment"></i> 
    </div>
  </li>
  )
}

export default App;
