import { Container, MenuItem } from "./style";

import { useContext } from "react";

import { InterfaceContext } from "../../contexts/interfaceContext";
import { UserContext } from "../../contexts/userContext";

import { useNavigate } from "react-router-dom";

import LogoutIcon from '../../assets/logout-icon.png';
import CreateVideoIcon from '../../assets/create-video-icon.png';


function DropdownMenu() {
    const navigate = useNavigate();
    const { openDropdownMenu } = useContext(InterfaceContext);
    const { login, logOut } = useContext(UserContext);


    return (
        <Container $openDropdownMenu={openDropdownMenu} $isLogged={login} >
            <MenuItem onClick={() => navigate('/create-video')}>
                <img src={CreateVideoIcon} className="menu-icons" /> Criar vídeo
            </MenuItem>
            
            <MenuItem onClick={() => navigate('/my-videos')}>
                Meus vídeos
            </MenuItem>
            
            {
                [...Array(3)].map((item, index) => (
                    <MenuItem key={index}>Example</MenuItem>
                ))
            }

            <MenuItem onClick={() => logOut()} >
                <img src={LogoutIcon} className="menu-icons" /> Sair
            </MenuItem>
        </Container>
    )
}

export default DropdownMenu;