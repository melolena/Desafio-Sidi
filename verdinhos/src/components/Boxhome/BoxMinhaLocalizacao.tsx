import Box from '@mui/material/Box';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './styleBox.css';
import MaskMinhaLocaliacao from '../MaskMinhaLocalizacao';

function BoxMinhaLocalizacao(){
    return(
        <Box className="boxBody">
            <div className="boxHome">
                <div className="tituloBoxHome">
                    <h2>Minha Localização</h2>
                    <IoIosCheckmarkCircleOutline/>
                </div>
            <MaskMinhaLocaliacao/>
            </div>
        </Box>
    );
}

export default BoxMinhaLocalizacao;