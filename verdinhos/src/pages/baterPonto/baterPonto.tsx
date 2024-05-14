import React, { useState } from 'react';
import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "./styleBP.sass";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiEntryDoor } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

function BaterPonto() {
  const [showBaterPonto, setShowBaterPonto] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowBaterPonto(true);
  };

  const handlePonto = (tipo) => {
    console.log(`Ponto de ${tipo} registrado para ${selectedDay}`);
  };

  return (
    <div className="baterPonto">
      <Header />
      <div id="botaoVoltar">
        <Link to="/home">
          <IoIosArrowBack />
        </Link>
      </div>
      <div id="bodyBaterPonto">
        <div id="calendario">
          <h2>2024</h2>
          <Calendario onDayClick={handleDayClick} />
        </div>
        {showBaterPonto && (
          <div id="menuPonto">
            <h2>Bater Ponto</h2>
            <div id='botoesPonto'>
              <div className="organizacaoBotoes">
                <Button variant="contained" startIcon={<GiEntryDoor/>} onClick={() => handlePonto("Entrada")}>
                  Entrada
                </Button>
                <Button variant="contained" startIcon = {<GiExitDoor/>} onClick={() => handlePonto("Saida")}>
                  Saida
                </Button>
              </div>
              <div className="organizacaoBotoes">
                <Button variant="contained" startIcon= {<FaCoffee/>} onClick={() => handlePonto("Pausa")}>
                  Pausa
                </Button>
                <Button variant="contained" startIcon = {<MdHistory/>} onClick={() => handlePonto("Histórico")}>
                  Histórico
                </Button>
              </div>
            </div>
          </div>
            
        )}
      </div>
    </div>
  );
}

export default BaterPonto;
