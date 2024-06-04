import { IoIosArrowBack } from "react-icons/io";
import React, { useState } from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import Mapa from "../../components/Mapa";
import Calendario from "../../components/Calendario";
import dayjs from 'dayjs';

function Localizacao(){
    const [selectedDay, setSelectedDay] = useState(dayjs());

    const handleDayClick = (day) => {
        setSelectedDay(day);
       
      };
    return(
        <div id="localizacao">
            <Header />
            <div className="botaoVoltar">
                <Link to="/home">
                    <IoIosArrowBack />
                </Link>
            </div>
            <div className='bodyCorrecao' id="bodyLocalizacao">
                <div id='mapa'>
                    <Mapa />
                </div>
                <div className="calendario">
                    <h2>2024</h2>
                    <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
                </div>
            </div>
        </div>
    )
}
export default  Localizacao;