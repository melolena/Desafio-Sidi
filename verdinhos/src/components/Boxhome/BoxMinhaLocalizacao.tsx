import Box from '@mui/material/Box';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './styleBox.sass';
import MaskMinhaLocaliacao from '../MaskMinhaLocalizacao';

function BoxMinhaLocalizacao(){
    return(
        <Box>
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