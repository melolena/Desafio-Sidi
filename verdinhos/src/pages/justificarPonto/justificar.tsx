import React, { useContext, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Calendario from '../../components/Calendario';
import HistoryContext, { HistoryContextProps } from '../../components/HistoryContext';
import { Button, TextField } from '@mui/material';
import ButtonUpload from '../../components/ButtonUpload';
import { styled } from '@mui/system';
import '../baterPonto/styleBP.css';

const CustomTextField = styled(TextField)(({  }) => ({
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

function JustificarPonto() {
  const { history } = useContext(HistoryContext) as HistoryContextProps;
  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());
  const [showJustificarPonto, setShowJustificarPonto] = useState(true);
  const [showConfirmarJustificativa, setShowConfirmarJustificativa] = useState(false);
  const [arquivoAnexado, setArquivoAnexado] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  useEffect(() => {
    if (selectedDay) {
      setTimeout(() => setShowJustificarPonto(true), 300);
    }
  }, [selectedDay, history]);

  const handleDayClick = (day: Dayjs | null) => {
    if (day) {
      setSelectedDay(day);
      setShowJustificarPonto(true);
      setShowConfirmarJustificativa(false);
      setArquivoAnexado(false);
      setSelectedTime('');
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleConfirmarJustificativa = () => {
    if (!selectedTime) {
      alert('Selecione um horário para justificar seu ponto.');
      return;
    }

    if (!arquivoAnexado) {
      alert('Nenhum arquivo foi anexado. Selecione um arquivo para continuar.');
      return;
    }

    setShowConfirmarJustificativa(true);
    setShowJustificarPonto(false);
  };

  const handleFileSelect = (isFileSelected: boolean) => {
    setArquivoAnexado(isFileSelected);
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
          <Calendario onChange={handleDayClick} value={selectedDay} />
        </div>

        {showJustificarPonto && (
          <div className="validationBox" id="justificativa">
            <h2>Justificar Ponto</h2>
            <h3>{selectedDay.format('DD/MM/YYYY')}</h3>
            <h3>Horário:</h3>
            <CustomTextField
              type="time"
              InputLabelProps={{ shrink: true }}
              value={selectedTime}
              onChange={handleTimeChange}
            />
            <ButtonUpload onFileSelect={handleFileSelect} />
            <div className="BotoesComponentesMenu">
              <Button onClick={handleConfirmarJustificativa}>
                Confirmar
              </Button>
            </div>
          </div>
        )}

        {showConfirmarJustificativa && (
          <div className="validationBox">
            <h2>Justificar Ponto</h2>
            <h3 id="subtituloConfirmacao">Ponto Justificado!</h3>
            <p>
              Tudo pronto! Sua entrada da data {selectedDay.format('DD/MM/YYYY')}, no horário {selectedTime} e com o anexo do seu documento foi autenticado com sucesso!
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

export default JustificarPonto;
