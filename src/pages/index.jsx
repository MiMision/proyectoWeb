import CardVehicles from 'components/CardVehicles';
import logo from 'media/logo.png';
import ferrariStradle from 'media/ferrariStradle.jpg';
import mercedesAMG from 'media/mercedesAMG.jpg';

function Index(){
    return(
        <div><header>
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
    <footer></footer></div>
    )
}

export  default Index;