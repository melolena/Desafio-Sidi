import Box from '@mui/material/Box';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './styleBox.sass';
import MaskJustificaPonto from '../MaskJustificaPonto';

function BoxJustificaPonto(){
    return(
        <Box>
            <div className="boxHome">
                <div className="tituloBoxHome">
                    <h2>Bater Ponto</h2>
                    <IoIosCheckmarkCircleOutline/>
                </div>
            <MaskJustificaPonto/>
            </div>
        </Box>
    );
}

export default BoxJustificaPonto;