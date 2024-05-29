import React, { useState, useEffect } from 'react';
import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "./styleBP.sass";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiEntryDoor, GiExitDoor } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import dayjs from 'dayjs';

function BaterPonto() {
  const [showBaterPonto, setShowBaterPonto] = useState(false);
  const [showEntradaBox, setShowEntradaBox] = useState(false);
  const [showConfirmarEntrada, setShowConfirmarEntrada] = useState(false);
  const [showConfirmarSaida, setShowConfirmarSaida] = useState(false);
  const [showSaidaBox, setShowSaidaBox] = useState(false);
  const [showHistoryBox, setShowHistoryBox] = useState(false);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [history, setHistory] = useState([]);


  useEffect(() => {
    setShowBaterPonto(true);
    const storedHistory = localStorage.getItem("pontosBatidos");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pontosBatidos", JSON.stringify(history));
  }, [history]);

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
    setShowHistoryBox(false);
  };

  const handlePonto = (tipo) => {
    setCurrentTime(dayjs());

    if (tipo === "Entrada") {
      setShowEntradaBox(true);
    } else if (tipo === "Saida") {
      setShowSaidaBox(true);
    } else if (tipo === "Historico") {
      setShowHistoryBox(true);
    }

    setShowBaterPonto(false);
    setShowConfirmarEntrada(false);
    setShowConfirmarSaida(false);
  };

  const handleVoltar = () => {
    setShowEntradaBox(false);
    setShowSaidaBox(false);
    setShowConfirmarEntrada(false);
    setShowConfirmarSaida(false);
    setShowHistoryBox(false);
    setShowBaterPonto(true);
  };

  const handleConfirmarEntrada = () => {
    const newRecord = {
      tipo: "Entrada",
      date: selectedDay.format('DD/MM/YYYY'),
      time: currentTime.format('HH:mm')
    };
    updateHistory(newRecord);
    setShowConfirmarEntrada(true);
    setShowEntradaBox(false);
  };

  const handleConfirmarSaida = () => {
    const newRecord = {
      tipo: "Saida",
      date: selectedDay.format('DD/MM/YYYY'),
      time: currentTime.format('HH:mm')
    };
    updateHistory(newRecord);
    setShowConfirmarSaida(true);
    setShowSaidaBox(false);
  };

  const updateHistory = (newRecord) => {
    setHistory((prevHistory) => {
      const updatedHistory = [newRecord, ...prevHistory];
      return updatedHistory.slice(0, 5); // Keep only the last 5 records
    });
  };

  return (
    <div className="baterPonto">
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
        {showBaterPonto && (
          <div className="menuPonto">
            <h2>Bater Ponto</h2>
            <div id='botoesPonto'>
              <div className="organizacaoBotoes">
                <Button variant="contained" startIcon={<GiEntryDoor/>} onClick={() => handlePonto("Entrada")}>
                  Entrada
                </Button>
                <Button variant="contained" startIcon={<GiExitDoor/>} onClick={() => handlePonto("Saida")}>
                  Saida
                </Button>
              </div>
              <div className="organizacaoBotoes">
                <Button variant="contained" startIcon={<MdHistory/>} onClick={() => handlePonto("Historico")}>
                  Histórico
                </Button>
              </div>
            </div>
          </div>
        )}
        {showEntradaBox && (
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
        )}
        {showConfirmarEntrada && (
          <div className="validationBox">
            <h2>Confirmar Entrada</h2>
            <h3 id="subtituloConfirmacao">Entrada Confirmada!</h3>
            <p>Tudo pronto! Sua entrada da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} foi realizada com sucesso!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
        {showSaidaBox && (
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
        {showConfirmarSaida && (
          <div className="validationBox">
            <h2>Confirmar Saída</h2>
            <h3 id="subtituloConfirmacao">Saída Confirmada!</h3>
            <p>Tudo pronto! Sua saída da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} foi realizada com sucesso!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
        {showHistoryBox && (
          <div className="validationBox" id="historyBox">
            <h2>Histórico</h2>
            <h3>Últimos Pontos Batidos</h3>
            {history.length > 0 ? (
              <div id="dateSpace">
                <ul id="historyList">
                  {history.map((record, index) => (
                    <li key={index} className="dateHistory">
                      <span>{record.tipo}</span>
                      <span>{record.date}</span>
                      <span>{record.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Nenhum ponto batido ainda.</p>
            )}
            <Button onClick={handleVoltar}>
              Voltar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BaterPonto;
