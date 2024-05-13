import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "./style.sass"
import { IoIosArrowDropleft } from "react-icons/io";

import { Link } from 'react-router-dom';



function BaterPonto(){
    return(
        <div className="baterPonto">
            <Header/>
            <div id= "botaoVoltar">
                <Link to="/home">
                    <IoIosArrowDropleft />
                </Link>
            </div>
            <div id="bodyBaterPonto">
                <div id="Calendario">
                    <h3>2024</h3>
                    <Calendario/>
                </div>
            </div>
        </div>
    )
}
export default BaterPonto;