import { IoIosArrowBack } from "react-icons/io";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import Leaflet from "../../components/Leaflet";


function Localizacao(){
    return(
        <div id="localizacao">
            <Header />
            <div className="botaoVoltar">
                <Link to="/home">
                <IoIosArrowBack />
                </Link>
            </div>
            <div className='bodyCorrecao'>
                <div id='mapa'>
                    <Leaflet />
                </div>
            </div>
        </div>
    )
}
export default  Localizacao;