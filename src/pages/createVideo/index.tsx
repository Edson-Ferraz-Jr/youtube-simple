import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import { Container, FormButtons, FormContainer, FormInputs } from "./style";

import YouTubeLogo from '../../assets/youTube-logo.png';
import CreateVideoIcon from '../../assets/create-video-icon.png'
import { VideosContext } from "../../contexts/videosContext";


function CreateVideo() {
    const navigate = useNavigate();

    const { login, user } = useContext(UserContext);

    const { createVideo } = useContext(VideosContext);
    
    useEffect(() => {
        if(login === false) {
            navigate('/sign-in')
        }
    }, [login]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    return (
        <Container>
            <img id="youtube-logo" src={YouTubeLogo} alt="Youtube Logo" onClick={() => navigate('/')} />


            <FormContainer>
                <header>
                    <h2>Adicionar Vídeo <img className="h2-icons" src={CreateVideoIcon} /></h2>
                </header>
                
                <FormInputs>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do vídeo" />

                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Insira uma descrição para o seu vídeo" />
                </FormInputs>
                
                <FormButtons>
                    <button onClick={async () => { await createVideo(localStorage.getItem('token'), title, description, user.id); navigate('/') } }>Criar</button>
                </FormButtons>
            </FormContainer>
        </Container>
    )
}

export default CreateVideo;