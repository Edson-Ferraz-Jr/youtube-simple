import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

interface IProps {
    video: {
        image: string
        title: string,
        channel: string,
        views: string,
        time: string
    }
}

function VideoComponent({ video }: IProps) {
    return (
        <Container>
            <ImageBanner $thumbnail={ video.image || 'http://placehold.co/1920x1080?text=thumbnail' } />

            <TitleContainer>
                <ChannelImage>
                    ?
                </ChannelImage>

                <TextContainer>
                    <Title>{ video.title || 'Título' }</Title>
                    <TextCard>{ video.channel || 'Nome do Canal' }</TextCard>
                    <TextCard>{ video.views || '?' } de visualizações - há { video.time || '?' }</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;
