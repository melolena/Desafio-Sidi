import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HistoryContext from '../../components/HistoryContext';
import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "../baterPonto/styleBP.sass"; 

function CorrigirPonto() {
  const { history, addPonto } = useContext(HistoryContext);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showCorrigirPonto, setShowCorrigirPonto] = useState(false);
  const [pontosDoDia, setPontosDoDia] = useState([]);

  useEffect(() => {
    if (selectedDay) {
      const pontos = history.filter(
        (ponto) => ponto.date === selectedDay.format("DD/MM/YYYY")
      );
      setPontosDoDia(pontos);
      setShowCorrigirPonto(true); // Abre a caixa de correção automaticamente
    }
  }, [selectedDay, history]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowCorrigirPonto(true);
  };

  const corrigirPonto = (ponto) => {
    console.log("Corrigindo ponto:", ponto);
    // Aqui você pode implementar a lógica de correção do ponto
  };

  return (
    <div className="corrigirPonto">
      <Header />
      <div className="botaoVoltar">
        <Link to="/home">
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="bodyCorrigirPonto">
        <div className="calendario">
          <h2>2024</h2>
          <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
        </div>
        {showCorrigirPonto && (
          <div className="corrigirPontoBox">
            <h2>Correção de Ponto</h2>
            <div className="pontosDoDia">
              {pontosDoDia.length > 0 ? (
                <ul>
                  {pontosDoDia.map((ponto, index) => (
                    <li key={index}>
                      <span>{ponto.tipo}</span> {/* Exibe o tipo de ponto */}
                      <span>{ponto.date}</span>
                      <span>{ponto.time}</span>
                      <Button variant="contained" onClick={() => corrigirPonto(ponto)}>Corrigir</Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nenhum ponto registrado neste dia.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CorrigirPonto;
