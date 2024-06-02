import React, { useContext, useState, useEffect } from 'react';
import HistoryContext from '../../components/HistoryContext';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Calendario from '../../components/Calendario';
import dayjs from 'dayjs';
import "../baterPonto/styleBP.sass";
import { TextField } from '@mui/material';

function JustificarPonto() {
  const { history } = useContext(HistoryContext);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [pontosDoDia, setPontosDoDia] = useState([]);
  const [ShowJustificarPonto, setShowJustificarPonto] = useState('');

  useEffect(() => {
    if (selectedDay) {
      const pontos = history.filter(
        (ponto) => ponto.date === selectedDay.format("DD/MM/YYYY")
      );
      setPontosDoDia(pontos);
      setShowJustificarPonto(true);
    }
  }, [selectedDay, history]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div id="justificarPonto">
      <Header />
      <div className="botaoVoltar">
        <Link to="/home">
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="bodyCorrecao">
        <div className="calendario">
          <h2>2024</h2>
          <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
        </div>

        {ShowJustificarPonto && (
          <div className="validationBox">
            <h2>Justificar Ponto</h2>
            <h3>Horário:</h3>
            <TextField
              type="time"
              id='caixaHora'
              InputLabelProps={{ shrink: true }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default JustificarPonto;
