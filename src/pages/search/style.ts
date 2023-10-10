import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const CardContainer = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    column-gap: 20px;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Thumbnail = styled.div<{ $thumbnail: string }>`
    background-image: url(${ ({ $thumbnail }) => $thumbnail });
    background-position: 50% 50%;
    background-size: cover;
    width: 330px;
    height: 200px;
    border-radius: 10px;

    @media(max-width: 599px) {
        width: 100%;
    }
`;

export const Info = styled.div`
    display: none;
    width: 50%;
    height: 200px;

    @media(min-width: 600px) {
        display: block;
    }
`;

export const ChannelCard = styled.div`
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin: 14px 0;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 450;
    margin: 0;
`;


export const ChannelName = styled.span`
    color: #8c8c8c;
    font-size: 12px;
    font-weight: 500;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 12px;
    font-weight: 500;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    color: #000;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const Description = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #8c8c8c;
    font-size: 13px;
`;

export const MobileInfo = styled(Info)`
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    height: auto;

    ${ChannelImage} {
        width: 40px;
        height: 40px;
    }
    
    .mobileText {
        width: 100%;
    }

    @media(min-width: 600px) {
        display: none;
    }
`;
