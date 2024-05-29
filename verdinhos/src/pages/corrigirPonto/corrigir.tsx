import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "../baterPonto/styleBP.sass";
import { IoIosArrowBack } from "react-icons/io";
import Calendario from "../../components/Calendario";
import dayjs from "dayjs";

function CorrigirPonto({ pontosBatidos }) {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showCorrigirPonto, setShowCorrigirPonto] = useState(false);
  const [pontosDoDia, setPontosDoDia] = useState([]);

  useEffect(() => {
    if (pontosBatidos && selectedDay) {
      const pontos = pontosBatidos.filter(
        (ponto) => ponto.data === selectedDay.format("DD/MM/YYYY")
      );
      setPontosDoDia(pontos);
    }
  }, [selectedDay, pontosBatidos]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowCorrigirPonto(true);
  };

  const corrigirPonto = (ponto) => {
    console.log("Corrigindo ponto:", ponto);
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
        <div className="calendarioCorrecao">
          <h2>2024</h2>
          <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
        </div>
        {showCorrigirPonto && (
          <div className="validationBox">
            <h2>Corrigir Ponto</h2>
            <div className="dataRegistada">
              <h3>Data</h3>
              <h3>{selectedDay.format("DD/MM/YYYY")}</h3>
            </div>
            <div className="pontosBatidos">
              <h3>Pontos Batidos</h3>
              {pontosDoDia.length > 0 ? (
                pontosDoDia.map((ponto, index) => (
                  <div key={index} className="ponto">
                    <span>{ponto.horario}</span>
                    <button onClick={() => corrigirPonto(ponto)}>
                      Corrigir
                    </button>
                  </div>
                ))
              ) : (
                <p>Nenhum ponto batido neste dia.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CorrigirPonto;
