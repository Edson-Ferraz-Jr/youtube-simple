import { Container,
    ContainerVideoCards,
    LogoContainer,
    ShortsLogo,
    VideoCard,
    VideoCardDescription,
    VideoCardThumbnail
} from "./style";

import ShortsLogoSolo from '../../assets/shorts-logo-solo.png'

function ShortsComponent() {
    return(
        <Container>
            <LogoContainer>
                <ShortsLogo src={ShortsLogoSolo} />

                <span>Shorts</span>
            </LogoContainer>
            
            <ContainerVideoCards>
                {
                    [...Array(10)].map((item, index) => (
                        <VideoCard key={index}>
                            <VideoCardThumbnail />

                            <VideoCardDescription>
                                <span className="title">Título do vídeo</span>

                                <span>1 mi de visualiazações</span>
                            </VideoCardDescription>
                        </VideoCard>
                    ))
                }
            </ContainerVideoCards>
        </Container>
    )
}

export default ShortsComponent;
