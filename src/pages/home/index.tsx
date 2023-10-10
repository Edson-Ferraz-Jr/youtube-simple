import { useContext } from "react";

import CategoriesBar from "../../components/categoriesBar";
import VideoComponent from "../../components/videoComponent";

import { InterfaceContext } from "../../contexts/interfaceContext";
import { Container, VideosContainer } from "./style";
import ShortsComponent from "../../components/shortsComponent";


const videos = [
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '1 mi',
        time: '5 meses'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '10 mi',
        time: '2 meses'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '789 mi',
        time: '2 anos'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '1 mi',
        time: '2 meses'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '1 mi',
        time: '2 meses'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '1 mi',
        time: '2 meses'
    },
    {
        image: 'http://placehold.co/1920x1080?text=thumbnail',
        title: 'Título do vídeo',
        channel: 'Nome do Canal',
        views: '1 mi',
        time: '2 meses'
    }
];

const categoriesList = [
    {name: 'Tudo', id: '0'},
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Kids', id: '1'},
    {name: 'Ciência e tecnologia', id: '2'}, 
    {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, 
    {name: 'Investimentos e finanças', id: '20'},
    {name: 'Moda e estilo', id: '23'}
];

function Home() {
    const { openMenu } = useContext(InterfaceContext);

    return(
        <Container>
            <CategoriesBar />

            <VideosContainer $openMenu={openMenu} style={{marginTop: '20px'}}>
                {
                    videos.map((item, index) => (
                        <VideoComponent video={item} key={index} />
                    ))
                }
            </VideosContainer>

            <ShortsComponent />
        </Container>
    )
}

export default Home;
