import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-top: 4px solid ${props => props.theme.themeName === 'light' ? '#ccc' : '#fff3'};
    border-bottom: 4px solid ${props => props.theme.themeName === 'light' ? '#ccc' : '#fff3'};
    padding: 30px 0;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;

    span {
        color: ${props => props.theme.themeName === 'light' ? '#000' : '#fff'};;
        font-size: 25px;
        padding: 0 8px;
    }
`;

export const ShortsLogo = styled.img`
    width: 40px;
`;

export const ContainerVideoCards = styled.div`
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;

    @media(max-width: 768px) {
        height: 400px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: scroll;
    }
`;

export const VideoCard = styled.div`
    width: 200px;
    height: 450px;

    @media(max-width: 768px) {
        height: 300px;
    }
`;

export const VideoCardThumbnail = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 15px;
    background-image: url('http://placehold.co/1080x1920?text=thumbnail');
    background-size: cover;
    background-position: 50% 50%;
`;

export const VideoCardDescription = styled.div`
    padding: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    .title {
        color: ${props => props.theme.themeName === 'light' ? '#000' : '#fff'};;
        font-size: 18px;
        font-weight: 500;
    }

    span {
        color: #8c8c8c;
        font-size: 14px;
    }
`;
