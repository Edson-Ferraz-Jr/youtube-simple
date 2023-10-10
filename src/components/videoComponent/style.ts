import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.div<{ $thumbnail?: string }>`
    width: 100%;
    height: 200px;
    background-image: url(${ ({ $thumbnail }) => $thumbnail });
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 12px;
    
    @media(min-width: 425px) {
        height: 250px;
    }

    @media(min-width: 768px) {
        height: 230px;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    color: #000;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 500;
    color: ${ props => props.theme.themeName === 'light' ? '#000' : '#fff' };
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;
