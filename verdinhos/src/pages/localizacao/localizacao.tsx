import { IoIosArrowBack } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import Mapa from "../../components/Mapa";
import Calendario from "../../components/Calendario";
import dayjs from 'dayjs';
import '../../pages/baterPonto/styleBP.css';
import { Button } from "@mui/material";

const Localizacao: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState(dayjs());
    const [isConfirming, setIsConfirming] = useState(false);
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleDayClick = (day: dayjs.Dayjs) => {
        setSelectedDay(day);
       setTimeout(() => setIsConfirming(true), 300);
        setShowConfirmationMessage(false);
    };

    const handleConfirmarLocalizacao = () => {
        setIsConfirming(false);
        setShowConfirmationMessage(true);
    };

    const handleVoltar = () => {
        setIsConfirming(false);
        setShowConfirmationMessage(false);
    };

    return (
        <div id="localizacao">
            <Header />
            <div className="botaoVoltar">
                <Link to="/home">
                    <IoIosArrowBack />
                </Link>
            </div>
            <div className='bodyCorrecao' id="bodyLocalizacao">
                <div id='mapa'>
                    <Mapa />
                </div>
                {!isConfirming && !showConfirmationMessage && (
                    <div className="calendario">
                        <h2>2024</h2>
                        <Calendario onDayClick={handleDayClick} selectedDay={selectedDay} />
                    </div>
                )}
                {isConfirming && !showConfirmationMessage && (
                    <div className="validationBox">
                        <h2>Confirmar Localização</h2>
                        <div className="dataRegistada">
                            <h3>Data</h3>
                            <h3>{selectedDay.format('DD/MM/YYYY')}</h3>
                        </div>
                        <div className="horaRegistrada">
                            <h3>Horário</h3>
                            <h3>{currentTime.format('HH:mm')}</h3>
                        </div>
                        <div className="botoesComponentesMenu">
                            <Button onClick={handleConfirmarLocalizacao}>
                                Confirmar
                            </Button>
                            <Button onClick={handleVoltar}>
                                Voltar
                            </Button>
                        </div>
                    </div>
                )}
                {showConfirmationMessage && (
                    <div className="validationBox">
                        <h2>Confirmar Localização</h2>
                        <h3 id="subtituloConfirmacao">Ponto Confirmado em sua Localização!</h3>
                        <p>Tudo pronto! Seu ponto da data {selectedDay.format('DD/MM/YYYY')} e no horário {currentTime.format('HH:mm')} e com sua localização atual foi concluída com sucesso!</p>
                        <p id="rodape">Confira as notificações para mais informações, e qualquer dúvida ou problema consulte o suporte.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Localizacao;
