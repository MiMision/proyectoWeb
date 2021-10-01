import CardVehicles from 'components/CardVehicles';
import ferrariStradle from 'media/ferrariStradle.jpg';
import mercedesAMG from 'media/mercedesAMG.jpg';


function Index(){
    return(
    <section>
            <h1 className="tituloCentrado">VEHICULOS</h1>
            <ul className="vehicleCardContainer">
              <CardVehicles vehicleTitle= "Ferrari Stradle" imagen={ferrariStradle}/>
              <CardVehicles vehicleTitle= "Mercedes AMG GT" imagen={mercedesAMG}/>
            </ul>
        </section>
    
    );
}

export  default Index;