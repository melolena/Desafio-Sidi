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
import RelogioPausa from '../../components/RelogioPausa';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';

function BaterPonto() {
  const [showBaterPonto, setShowBaterPonto] = useState(false);
  const [showEntradaBox, setShowEntradaBox] = useState(false);
  const [showConfirmarEntrada, setShowConfirmarEntrada] = useState(false);
  const [showConfirmarSaida, setShowConfirmarSaida] = useState(false);
  const [showSaidaBox, setShowSaidaBox] = useState(false);
  const [showPausaBox, setShowPausaBox] = useState(false);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [currentTime, setCurrentTime] = useState(dayjs());  

  useEffect(() => {
    setShowBaterPonto(true);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowBaterPonto(true);
    setShowEntradaBox(false);
    setShowConfirmarEntrada(false); 
    setShowSaidaBox(false);
    setShowConfirmarSaida(false);
    setShowPausaBox(false);
  };

  const handlePonto = (tipo) => {
    console.log(`Ponto de ${tipo} registrado para ${selectedDay}`);
    if (tipo === "Entrada") {
      setCurrentTime(dayjs());
      setShowEntradaBox(true);
      setShowBaterPonto(false);
      setShowConfirmarEntrada(false);
      setShowSaidaBox(false);
      setShowConfirmarSaida(false);
      setShowPausaBox(false);
    }

    if (tipo === "Saida") {
      setCurrentTime(dayjs());
      setShowSaidaBox(true);
      setShowConfirmarEntrada(false);
      setShowBaterPonto(false);
      setShowEntradaBox(false);
      setShowConfirmarSaida(false);
      setShowPausaBox(false);
    }

    if (tipo === "Pausa") {
      setCurrentTime(dayjs());
      setShowPausaBox(true);
      setShowConfirmarEntrada(false);
      setShowBaterPonto(false);
      setShowEntradaBox(false);
      setShowSaidaBox(false);
      setShowConfirmarSaida(false);
      setShowSaidaBox(false);
    }
  };

  const handleVoltar = () => {
    setShowEntradaBox(false);
    setShowBaterPonto(true);
    setShowSaidaBox(false);
    setShowConfirmarSaida(false);
    setShowEntradaBox(false);
    setShowConfirmarEntrada(false);
    setShowPausaBox(false);
  };

  const handleConfirmarEntrada = () =>{
    setShowConfirmarEntrada(true);
    setShowEntradaBox(false);
    setShowSaidaBox(false);
    setShowBaterPonto(false);
    setShowSaidaBox(false);
    setShowConfirmarSaida(false);
    setShowPausaBox(false);
  };

  const handleConfirmarSaida = () =>{
    setShowConfirmarSaida(true);
    setShowConfirmarEntrada(false);
    setShowSaidaBox(false);
    setShowBaterPonto(false);
    setShowEntradaBox(false);
    setShowPausaBox(false);
  };

  const handlePausa = () =>{
    setShowPausaBox(true);
    setShowConfirmarEntrada(false);
    setShowBaterPonto(false);
    setShowEntradaBox(false);
    setShowSaidaBox(false);
    setShowConfirmarSaida(false);
    setShowSaidaBox(false);
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
              <Button onClick={handleConfirmarEntrada}>
                Confirmar
              </Button>
              <Button onClick={handleVoltar}>
                Voltar
              </Button>
            </div>
          </div>
        ) }
        {showConfirmarEntrada &&(
          <div className="validationBox">
            <h2>Confirmar Entrada</h2>
            <h3 id="subtituloConfirmacao">Entrada Confirmada!</h3>
            <p>Tudo pronto! Sua entrada da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} foi relizada com sucesso!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
        {showSaidaBox &&(
          <div className="validationBox">
          <h2>Saída</h2>
          <div className="dataRegistada">
            <h3>Data</h3>
            <h3>{selectedDay.format('DD/MM/YYYY')}</h3>
          </div>
          <div className="horaRegistrada">
            <h3>Horário</h3>
            <h3>{currentTime.format('HH:mm')}</h3>
          </div>
          <div className="BotoesComponentesMenu"> 
            <Button onClick={handleConfirmarSaida}>
              Confirmar
            </Button>
            <Button onClick={handleVoltar}>
              Voltar
            </Button>
          </div>
        </div>
        )}
        {showConfirmarSaida &&(
          <div className="validationBox">
            <h2>Confirmar Saída</h2>
            <h3 id="subtituloConfirmacao">Saída Confirmada!</h3>
            <p>Tudo pronto! Sua saída da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} foi relizada com sucesso!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
        {showPausaBox &&(
          <div className="validationBox" id="pausaBox">
          <h2>Pausa</h2>
          <div className="dataRegistada">
            <h3>Data</h3>
            <h3>{selectedDay.format('DD/MM/YYYY')}</h3>
          </div>
          <div className="horaRegistrada">
            <h3>Horário</h3>
            <h3>{currentTime.format('HH:mm')}</h3>
          </div>
          <div id="horarioFinal">
            <p>Defina o horário de término do intevalo</p>
          </div>
          <div className="BotoesComponentesMenu"> 
            <Button onClick={handleVoltar}>
              Voltar
            </Button>
          </div>
        </div>
        )}
        

      </div>
    </div>
  );
}

export default BaterPonto;
