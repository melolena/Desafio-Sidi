import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/login/login.tsx';
import Home from './pages/home/home.tsx';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element = {<Login />}></Route>
                <Route path ="/home" element = {<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
