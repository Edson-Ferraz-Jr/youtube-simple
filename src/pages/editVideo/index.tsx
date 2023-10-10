import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import { Container, FormButtons, FormContainer, FormInputs } from "./style";

import YouTubeLogo from '../../assets/youTube-logo.png';
import CreateVideoIcon from '../../assets/create-video-icon.png'
import { VideosContext } from "../../contexts/videosContext";
import api from "../../api";


function EditVideo() {
    const { video_id } = useParams();
    
    const { login } = useContext(UserContext);

    const { editVideo } = useContext(VideosContext);
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if(login === false) {
            navigate('/sign-in')
        }
    }, [login]);
    
    const [myVideo, setMyVideo] = useState({ 
        video_id: '',
        image: '',
        title: '',
        description: '',
        channel: '',
        views: '',
        time: ''
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        api.get(`/videos/get-video/${video_id}`).then(({ data }) => {
            setMyVideo(data.video)
        }).catch((error) => {
            console.log('Erro ao carregar vídeos')
        });
    }, [])

    useEffect(() => {
        setTitle(myVideo.title);
        setDescription(myVideo.description);
    }, [myVideo]);

    
    return (
        <Container>
            <img id="youtube-logo" src={YouTubeLogo} alt="Youtube Logo" onClick={() => navigate('/')} />


            <FormContainer>
                <header>
                    <h2>Editar Vídeo <img className="h2-icons" src={CreateVideoIcon} /></h2>
                </header>
                
                <FormInputs>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do vídeo" />

                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Insira uma descrição para o seu vídeo" />
                </FormInputs>
                
                <FormButtons>
                    <button onClick={async () => { await editVideo(localStorage.getItem('token'), title, description, myVideo.video_id); navigate('/my-videos') } }>Concluir</button>
                </FormButtons>
            </FormContainer>
        </Container>
    )
}

export default EditVideo;