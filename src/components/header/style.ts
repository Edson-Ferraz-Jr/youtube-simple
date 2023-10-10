import styled from "styled-components";

import YoutubeLogo from '../../assets/youTube-logo.png';
import YoutubeLogoDarkTheme from '../../assets/youtube-logo-dark-theme.png';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.fontColor };
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;

    .menu-button-mobile {
        display: none;
        margin: 0;
    }

    @media(max-width: 768px) {
        padding: 0 5px;

        .menu-button-mobile {
            display: flex;
        }

        .theme-switcher {
            width: 30px;
            height: 30px;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImageContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    max-width: ${ props => props.theme.themeName === 'light' ? '120px' : '130px' };
    width: ${ props => props.theme.themeName === 'light' ? '120px' : '130px' };
    max-height: ${ props => props.theme.themeName === 'light' ? '60px' : '80px' };
    height: ${ props => props.theme.themeName === 'light' ? '60px' : '80px' };
`;

export const LogoImage = styled.div`
    background-image: url(${ props => props.theme.themeName === 'light' ? YoutubeLogo : YoutubeLogoDarkTheme });
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;


export const ButtonContainer = styled.div<{ margin?: string }>`
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => { return margin ? margin : 0} };
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${ props => props.theme.buttonContainer.hover.backGroundColor };
    }

    @media(min-width: 769px) {
        display: flex;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;

    //filter (invert color)
    ${ props => ( props.theme.themeName === 'dark' ? 'filter: grayscale(1) invert(1);' : undefined )}
`;

export const SearchContainer = styled.div`
    display: flex;

    @media(max-width: 1024px) {
        max-width: 400px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    background-color: ${ props => props.theme.backGroundColor };
    border: 1px solid ${ props => props.theme.form.inputBorderColor };
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.fontColor };
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: ${ props => props.theme.form.searchButtonColor };
    border: 1px solid ${ props => props.theme.form.inputBorderColor };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TogglerShowInput = styled.div<{ $showInput?: boolean }>`
    display: ${ ({ $showInput }) => $showInput ? 'none' : 'flex' };
    width: 100%;
    padding: 0 20px;
    justify-content: flex-end;

    @media(min-width: 769px) {
        display: none;
    }
`;

export const SearchContainerMobile = styled.div<{ $showInput?: boolean }>`
    display: ${ ({ $showInput }) => $showInput ? 'grid' : 'none' };
    grid-template-columns: 1fr 4fr 1fr;
    background-color: #3b3b3b;
    color: #000;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    max-width: 100%;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    
    .back-button {
        ${ButtonIcon} {
            width: 30px;
            height: 30px;
        }
    }
    
    .search-button {
        border-radius: 0 40px 40px 0;
        height: 35px;
        width: 70px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        ${ButtonIcon} {
            filter: initial;
        }
    }

    @media(min-width: 769px) {
        display: none;
    }
`;

export const SearchInputContainerMobile = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 40px 0 0 40px;
    align-items: center;
    padding: 0 16px;
    height: 35px;
    max-width: 100%;

    input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;

    .theme-switcher {
        background-color: ${props => props.theme.themeName === 'light' ? '#0f0f0f' : '#fff'};
        display: flex;
        
        img {
            filter: initial;
        }
    }
`;

export const LoginButton = styled.button`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    padding: 10px;
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.loginButton.fontColor };
    font-weight: 600;
    border: 1px solid ${ props => props.theme.loginButton.borderColor };
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${ props => props.theme.loginButton.hover.backGroundColor };
        border-color: none;
    }

    ${ButtonIcon} {
        filter: initial;
    }
    
    @media(max-width: 425px) {
        span {
            display: none;
        }
    }
`;

export const LoggedButton = styled.button<{ margin?: string }>`
    display: flex;
    width: 40px;
    height: 40px;
    background-color: beige;
    border: none;
    border-radius: 50%;
    margin: ${({ margin }) => { return margin ? margin : 0} };
    font-size: 13px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
