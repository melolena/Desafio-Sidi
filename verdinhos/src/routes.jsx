import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/login/login.tsx';
import Home from './pages/home/home.tsx';
import BaterPonto from './pages/baterPonto/baterPonto.tsx';
import CorrigirPonto from './pages/corrigirPonto/corrigir.tsx';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element = {<Login />}></Route>
                <Route path ="/home" element = {<Home />}></Route>
                <Route path = "/baterponto" element = {<BaterPonto />}></Route>
                <Route path = "/corrigirponto" element = {<CorrigirPonto/>}></Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
