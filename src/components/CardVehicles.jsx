
import {Link} from 'react-router-dom'

function CardVehicles({vehicleTitle, imagen}){
    return(
    <li className="vehicleCard">
      <Link to='/ferrariStradle'>
        <div className="contenedorImagen">
          <img src={imagen} alt= {vehicleTitle}/>
      </div>
      </Link>
      <span className="vehicleName">{vehicleTitle}</span>
      <div className="cardIcon">
          <i className="fas fa-heart iconoCorazon"></i>
          <i className="fas fa-shopping-cart iconoCart"></i>
          <i className="fas fa-comment iconoComment"></i> 
      </div>
    </li>
    )
  }

export default CardVehicles;