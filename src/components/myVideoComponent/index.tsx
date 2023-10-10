import { ButtonContainer, ButtonIcon, ChannelImage, Container, ImageBanner, MenuContainer, MenuItem, TextCard, TextContainer, Title, TitleContainer } from "./style";

import { useContext, useEffect, useRef, useState } from "react";

import MenuIcon from '../../assets/menu-icon.png'
import EditIcon from '../../assets/edit-icon.png'
import DeleteIcon from '../../assets/delete-icon.png'
import { VideosContext } from "../../contexts/videosContext";
import { useNavigate } from "react-router-dom";


interface IProps {
    video: {
        video_id: string,
        image: string,
        title: string,
        description: string,
        channel: string,
        views: string,
        time: string
    }
}

function MyVideoComponent({ video }: IProps) {
    const navigate = useNavigate();
    
    const { deleteVideo } = useContext(VideosContext);
    
    const [openVideoOptions, setOpenVideoOptions] = useState(false);

    
    return (
        <Container>
            <ImageBanner $thumbnail={ video.image || 'http://placehold.co/1920x1080?text=thumbnail' } />

            <TitleContainer>
                <TextContainer>
                    <Title>{ video.title || 'Título' }</Title>
                    <TextCard>{ video.description || 'Descrição do vídeo' }</TextCard>
                    <TextCard>{ video.views || '?' } de visualizações - há { video.time || '?' }</TextCard>
                </TextContainer>

                <div className="options-button">
                    <ButtonContainer tabIndex={0} onClick={() => setOpenVideoOptions(!openVideoOptions)} onBlur={ () => setTimeout(() => {
                        setOpenVideoOptions(false)
                    }, 200) } >
                        <ButtonIcon src={MenuIcon} />
                    </ButtonContainer>
                </div>
                
                <MenuContainer $openDropdownMenu={openVideoOptions} >
                    <MenuItem onClick={() => navigate(`/edit-video/${video.video_id}`)}>
                        <img src={EditIcon} className="menu-icons" /> Editar
                    </MenuItem>

                    <MenuItem onClick={() => deleteVideo(localStorage.getItem('token'), video.video_id)} >
                        <img src={DeleteIcon} className="menu-icons" /> Apagar
                    </MenuItem>
                </MenuContainer>
            </TitleContainer>

        </Container>
    )
}

export default MyVideoComponent;
