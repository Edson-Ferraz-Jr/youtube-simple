import { Container, MenuItem } from "./style";

import { useContext } from "react";

import { InterfaceContext } from "../../contexts/interfaceContext";
import { UserContext } from "../../contexts/userContext";

import { useNavigate } from "react-router-dom";

import LogoutIcon from '../../assets/logout-icon.png';
import CreateVideoIcon from '../../assets/create-video-icon.png';
import DeleteIcon from '../../assets/delete-icon.png';


function DropdownMenu() {
    const navigate = useNavigate();
    const { openDropdownMenu } = useContext(InterfaceContext);
    const { login, logOut, deleteUser, user } = useContext(UserContext);


    return (
        <Container $openDropdownMenu={openDropdownMenu} $isLogged={login} >
            <MenuItem onClick={() => navigate('/create-video')}>
                <img src={CreateVideoIcon} className="menu-icons" /> Criar Vídeo
            </MenuItem>
            
            <MenuItem onClick={() => navigate('/my-videos')}>
                Meus vídeos
            </MenuItem>
            
            {
                [...Array(2)].map((item, index) => (
                    <MenuItem key={index}>Example</MenuItem>
                ))
            }

            <MenuItem className="warning" onClick={() => deleteUser(localStorage.getItem('token'), user.id)} >
                <img src={DeleteIcon} className="menu-icons" /> Deletar Usuário
            </MenuItem>

            <MenuItem onClick={() => logOut()} >
                <img src={LogoutIcon} className="menu-icons" /> Sair
            </MenuItem>
        </Container>
    )
}

export default DropdownMenu;