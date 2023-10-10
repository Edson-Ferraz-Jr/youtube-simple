import { useSearchParams } from "react-router-dom";
import { ChannelImage, ChannelCard, CardContainer, Info, TextCard, Thumbnail, Title, Description, Container, ChannelName, MobileInfo } from "./style";
import { useEffect, useState } from "react";
import api from "../../api";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [foundVideos, setFoundVideos] = useState([
        { 
            image: '',
            title: 'Título do vídeo',
            description: 'Descrição do vídeo',
            channel: 'Nome do Canal',
            views: 'x de visualizações',
            time: '?'
        },
        { 
            image: '',
            title: 'Título do vídeo',
            description: 'Descrição do vídeo',
            channel: 'Nome do Canal',
            views: 'x de visualizações',
            time: '?'
        }
    ]);

    useEffect(() => {
        api.get(`/videos/search?search=${searchParams.get('query')}`).then(({ data }) => {
            setFoundVideos(data.videos)
        }).catch((error) => {
            console.log('Erro ao carregar vídeos')
        })
    }, [foundVideos])

    return(
        <Container>
            {
                foundVideos.map((item, index) => (
                    <CardContainer key={index}>
                        <Thumbnail $thumbnail={ item.image || 'http://placehold.co/1920x1080?text=thumbnail' } />

                        <Info>
                            <Title>{ item.title }</Title>

                            <TextCard>{ item.views || '?' } de visualizações - há { item.time || '?' }</TextCard>
                            
                            <ChannelCard>
                                <ChannelImage>?</ChannelImage> <ChannelName>{ item.channel || 'Nome do Canal' }</ChannelName>
                            </ChannelCard>

                            <Description>
                                {
                                    item.description || 'Descrição do vídeo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi! Assumenda tempore sit quaerat consectetur odio molestias praesentium dicta temporibus corporis perspiciatis reiciendis saepe atque porro, ex nam nobis facilis.'
                                }
                            </Description>
                        </Info>

                        <MobileInfo>                            
                            <ChannelCard>
                                <ChannelImage>?</ChannelImage>
                            </ChannelCard>

                            <div className="mobileText">
                                <Title>{ item.title }</Title>

                                <TextCard>{ item.channel || 'Nome do Canal' } - { item.views || '?' } de visualizações - há { item.time || '?' }</TextCard>
                            </div>
                        </MobileInfo>
                    </CardContainer>
                ))
            }
        </Container>
    )
}

export default Search;
