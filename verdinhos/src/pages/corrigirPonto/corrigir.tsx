import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HistoryContext from '../../components/HistoryContext';
import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "../baterPonto/styleBP.sass";
import { TextField } from '@mui/material';

function CorrigirPonto() {
  const { history, addPonto } = useContext(HistoryContext);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showCorrigirPonto, setShowCorrigirPonto] = useState(false);
  const [pontosDoDia, setPontosDoDia] = useState([]);
  const [editingPonto, setEditingPonto] = useState(null);
  const [showEdicao, setShowEdicao] = useState(false);
  const [showCorrecaoPonto, setShowCorrecaoPonto] = useState(true);
  const [showConfirmarEdicao, setShowConfirmarEdicao] = useState(false);
  const [novoHorario, setNovoHorario] = useState('');

  useEffect(() => {
    if (selectedDay) {
      const pontos = history.filter(
        (ponto) => ponto.date === selectedDay.format("DD/MM/YYYY")
      );
      setPontosDoDia(pontos);
      setShowCorrigirPonto(true);
    }
  }, [selectedDay, history]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowCorrigirPonto(true);
    setShowCorrecaoPonto(true);
    setShowEdicao(false);
    setShowConfirmarEdicao(false);
  };

  const corrigirPonto = (ponto) => {
    setEditingPonto(ponto);
    setNovoHorario(ponto.time);
    setShowEdicao(true);
    setShowCorrecaoPonto(false);
  };

  const handleSalvar = () => {
    if (editingPonto) {
      const novoPonto = { ...editingPonto, time: novoHorario };
      const historyAtualizado = history.map(p => (p === editingPonto ? novoPonto : p));
      addPonto(novoPonto, historyAtualizado); // Salva o novo ponto
      setShowEdicao(false);
      setShowConfirmarEdicao(true);
      setShowCorrecaoPonto(false);
    }
  };

  const handleCancelarEdicao = () => {
    setEditingPonto(null);
    setShowEdicao(false);
    setShowCorrecaoPonto(true);
  };

  return (
    <div id="corrigirPonto">
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

        {showCorrecaoPonto && (
          <div className="validationBox" id="editarPonto">
            <h2>Corrigir Ponto</h2>
            <div className="pontosDoDia">
              {pontosDoDia.length > 0 ? (
                <ul>
                  {pontosDoDia.map((ponto, index) => (
                    <li key={index}>
                      <span>{ponto.tipo} - </span>
                      <span>{ponto.date} - </span>
                      <span>{ponto.time}</span>
                      <Button variant="contained" onClick={() => corrigirPonto(ponto)}>
                        Corrigir
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nenhum ponto registrado neste dia.</p>
              )}
            </div>
          </div>
        )}

        {showEdicao && (
          <div className="validationBox" id="pontoEditado">
            <h2>Corrigir Ponto</h2>
            <h3>Horário:</h3>
            <TextField
              type="time"
              id='caixaHora'
              value={novoHorario}
              onChange={(e) => setNovoHorario(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <div className="botoesComponentesMenu">
              <Button variant="contained" onClick={handleSalvar}>Salvar</Button>
              <Button variant="outlined" onClick={handleCancelarEdicao}>Cancelar</Button>
            </div>
          </div>
        )}

        {showConfirmarEdicao && (
          <div className="validationBox">
            <h2>Ponto Corrigido!</h2>
            <h3 id="subtituloConfirmacao">Ponto Corrigido!</h3>
            <p>Tudo pronto! Seu ponto da data {selectedDay.format('DD/MM/YYYY')} foi editado com sucesso para {novoHorario}!</p>
            <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CorrigirPonto;
