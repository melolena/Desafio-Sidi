import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "../baterPonto/styleBP.sass";
import { IoIosArrowBack } from "react-icons/io";
import Calendario from "../../components/Calendario";
import dayjs from "dayjs";
import ApresentacaoCorrigirPonto from '../../components/CorrigirPonto/ApresentacaoCorrigirPonto';
    
function CorrigirPonto() {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showCorrigirPonto, setShowCorrigirPonto] = useState(false);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowCorrigirPonto(true);
  };

  return (
    <div id="corrigirPonto">
      <Header />
      <div className="botaoVoltar">
        <Link to="/home">
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="bodyBaterPonto">
        <div className="calendario">
          <h2>2024</h2>
          <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
        </div>
        <div>
            {showCorrigirPonto}  <ApresentacaoCorrigirPonto selectedDay = {selectedDay}/>
        </div>
      </div>
    </div>
  );
}

export default CorrigirPonto;
