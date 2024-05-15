import React, { useState, useEffect } from 'react';
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
import dayjs from 'dayjs';

function BaterPonto() {
  const [showBaterPonto, setShowBaterPonto] = useState(false);
  const [showEntradaBox, setShowEntradaBox] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [currentTime, setCurrentTime] = useState(dayjs());
  useEffect(() => {
    setShowBaterPonto(true);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowBaterPonto(true);
    setShowEntradaBox(false); 
  };

  const handlePonto = (tipo) => {
    console.log(`Ponto de ${tipo} registrado para ${selectedDay}`);
    if (tipo === "Entrada") {
      setCurrentTime(dayjs());
      setShowEntradaBox(true);
      setShowBaterPonto(false);
    }
  };

  const handleVoltar = () => {
    setShowEntradaBox(false);
    setShowBaterPonto(true);
  };

  const handleConfirmar = () =>{
    setShowConfirmar(true);
    setShowEntradaBox(false);
  }

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
          <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
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
        {showEntradaBox &&(
          <div className="validationBox">
            <h2>Entrada</h2>
            <div className="dataRegistada">
              <h3>Data</h3>
              <h3>{selectedDay.format('DD/MM/YYYY')}</h3>
            </div>
            <div className="horaRegistrada">
              <h3>Horário</h3>
              <h3>{currentTime.format('HH:mm')}</h3>
            </div>
            <div className="BotoesComponentesMenu"> 
              <Button onClick={handleConfirmar}>
                Confirmar
              </Button>
              <Button onClick={handleVoltar}>
                Voltar
              </Button>
            </div>
          </div>
        ) }
        {showConfirmar &&(
          <div className="validationBox">
            <h2>Confirmar Entrada</h2>
            <h3 id="subtituloConfirmacao">Entrada Confirmada!</h3>
            <p>Tudo pronto! Sua entrada da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} foi relizada com sucesso!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BaterPonto;
