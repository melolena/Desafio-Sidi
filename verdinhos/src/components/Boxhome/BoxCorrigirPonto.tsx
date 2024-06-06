import Box from '@mui/material/Box';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './styleBox.css';
import MaskCorrigirPonto from '../MaskCorrigirPonto';

function BoxCorrigirPonto(){
    return(
        <Box className="boxBody">
            <div className="boxHome">
                <div className="tituloBoxHome">
                    <h2>Corrigir Ponto</h2>
                    <IoIosCheckmarkCircleOutline/>
                </div>
            <MaskCorrigirPonto/>
            </div>
        </Box>
    );
}

export default BoxCorrigirPonto;