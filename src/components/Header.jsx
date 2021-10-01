import logo from 'media/logo.png';

const Header = ()=>{
    return(
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

    )
};

export default Header;





/* 
const variableNumerica = 3;
const variableTexto = "Texto";
const variableArray = [1,2,3,4,5];
const variableObjeto = {
    nombre: "Jeronimo",
    apellido: "Orozco",
    edad: "19",
};

const listaObjetos = [
    {
    nombre: "Jeronimo",
    apellido: "Orozco",
    edad: "19",
},
{
    nombre: "Elias",
    apellido: "Zapata",
    edad: "25",
},
{
    nombre: "Samuel",
    apellido: "Orozco",
    edad: 16,
},
{
    nombre: "Carlos",
    apellido: "Marin",
    edad: 14,
},
]

const nombreFuncion = (in2, in3)  =>{
    return 'retorno de la funcion';
}; */


