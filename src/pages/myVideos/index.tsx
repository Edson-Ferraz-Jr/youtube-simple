import { useContext, useEffect, useState } from "react";

import { Container, VideosContainer } from "./style";

import MyVideoComponent from "../../components/myVideoComponent";

import { InterfaceContext } from "../../contexts/interfaceContext";
import { UserContext } from "../../contexts/userContext";

import { useNavigate } from "react-router-dom";

import api from "../../api";

function MyVideos() {
    const navigate = useNavigate();
    
    const { openMenu } = useContext(InterfaceContext);
    const { user, login } = useContext(UserContext);

    const [myVideos, setMyVideos] = useState([
        { 
            video_id: '',
            image: '',
            title: '',
            description: '',
            channel: '',
            views: '',
            time: ''
        }
    ]);

    useEffect(() => {
        if(login === false) {
            navigate('/')
        }
    }, [login]);

    useEffect(() => {
        api.get(`/videos/get-videos/${user?.id}`).then(({ data }) => {
            setMyVideos(data.videos)
        }).catch((error) => {
            console.log('Erro ao carregar vídeos')
        })
    }, [myVideos])
    
    return (
        <Container>
            <h2>Meus Vídeos</h2>

            <VideosContainer $openMenu={openMenu}>
                {
                    myVideos.map((item, index) => (
                        <MyVideoComponent video={item} key={index} />
                    ))
                }
            </VideosContainer>
        </Container>
    )
}

export default MyVideos;
