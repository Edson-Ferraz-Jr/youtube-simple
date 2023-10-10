import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const VideosContainer = styled.div<{ $openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    padding: 30px 0;
    margin: auto;
    display: grid;
    column-gap: 20px;
    row-gap: 50px;

    @media(max-width: 2560px) {
        grid-template-columns: ${ ({ $openMenu }) => $openMenu ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)' };
    }

    @media(max-width: 1440px) {
        grid-template-columns: ${ ({ $openMenu }) => $openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' };
    }

    @media(max-width: 1024px) {
        grid-template-columns: ${ ({ $openMenu }) => $openMenu ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)' };
    }
    
    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 590px) {
        grid-template-columns: 1fr;
    }
`;
