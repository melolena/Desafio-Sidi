import Box from '@mui/material/Box';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import MaskBaterPonto from '../MaskBaterPonto';
import './styleBox.sass';

function BoxBaterPonto(){
    return(
        <Box className="boxBody">
            <div className="boxHome">
                <div className="tituloBoxHome">
                    <h2>Bater Ponto</h2>
                    <IoIosCheckmarkCircleOutline/>
                </div>
            <MaskBaterPonto/>
            </div>
        </Box>
    );
}

export default BoxBaterPonto;