import React, { useState, useEffect, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HistoryContext, { HistoryContextProps, HistoryRecord } from '../../components/HistoryContext';
import Calendario from '../../components/Calendario';
import Header from '../../components/Header';
import '../baterPonto/styleBP.css';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    border: '3px solid #620FC3',
    backgroundColor: '#D9D9D9',
    borderRadius: '5px',
    height: '40px',
    width: '300px',
    '& input': {
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000000',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    display: 'none',
  },
  '& .MuiSvgIcon-root': {
    color: '#620FC3',
  },
}));

function CorrigirPonto() {
  const { history, updateHistory } = useContext(HistoryContext) as HistoryContextProps;
  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());
  const [view, setView] = useState<'corrigir' | 'editar' | 'confirmar'>('corrigir');
  const [pontosDoDia, setPontosDoDia] = useState<HistoryRecord[]>([]);
  const [editingPonto, setEditingPonto] = useState<HistoryRecord | null>(null);
  const [novoHorario, setNovoHorario] = useState('');

  useEffect(() => {
    const pontos = history.filter(
      (ponto) => ponto.date === selectedDay.format('DD/MM/YYYY')
    );
    setPontosDoDia(pontos);
  }, [selectedDay, history]);

  const handleDayClick = (day: Dayjs | null) => {
    if (day) {
      setSelectedDay(day);
      setView('corrigir');
    }
  };

  const corrigirPonto = (ponto: HistoryRecord) => {
    setEditingPonto(ponto);
    setNovoHorario(ponto.time);
    setView('editar');
  };

  const handleSalvar = () => {
    if (editingPonto) {
      const novoPonto = { ...editingPonto, time: novoHorario };
      const historyAtualizado = history.map((p) => (p === editingPonto ? novoPonto : p));
      updateHistory(historyAtualizado);
      setView('confirmar');
    }
  };

  const handleCancelarEdicao = () => {
    setEditingPonto(null);
    setView('corrigir');
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
          <Calendario onChange={handleDayClick} value={selectedDay} />
        </div>

        {view === 'corrigir' && (
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

        {view === 'editar' && (
          <div className="validationBox" id="pontoEditado">
            <h2>Corrigir Ponto</h2>
            <h3>Horário:</h3>
            <CustomTextField
              type="time"
              id="caixaHora"
              value={novoHorario}
              onChange={(e) => setNovoHorario(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <div className="botoesComponentesMenu">
              <Button variant="contained" onClick={handleSalvar}>
                Salvar
              </Button>
              <Button variant="outlined" onClick={handleCancelarEdicao}>
                Cancelar
              </Button>
            </div>
          </div>
        )}

        {view === 'confirmar' && (
          <div className="validationBox">
            <h2>Ponto Corrigido!</h2>
            <h3 id="subtituloConfirmacao">Ponto Corrigido!</h3>
            <p>
              Tudo pronto! Seu ponto da data {selectedDay.format('DD/MM/YYYY')} foi editado com sucesso para {novoHorario}!
            </p>
            <p id="rodape">
              Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CorrigirPonto;
