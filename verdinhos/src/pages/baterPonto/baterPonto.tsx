import React, { useState } from 'react';
import Calendario from "../../components/Calendario";
import Header from "../../components/Header";
import "./styleBP.sass";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
          <Box ml={4} p={2} border="1px solid purple" borderRadius="8px">
            <Typography variant="h5" gutterBottom>
              Bater Ponto
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" onClick={() => handlePonto('Entrada')}>
                Entrada
              </Button>
              <Button variant="outlined" onClick={() => handlePonto('Saída')}>
                Saída
              </Button>
              <Button variant="outlined" onClick={() => handlePonto('Pausa')}>
                Pausa
              </Button>
              <Button variant="outlined" onClick={() => handlePonto('Histórico')}>
                Histórico
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
}

export default BaterPonto;
