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
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 10px;

    .options-button {
        position: absolute;
        right: 0;
        top: 0;
    }
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
    padding: 10px 0;
`;

export const Title = styled.span`
    font-weight: 500;
    color: ${ props => props.theme.themeName === 'light' ? '#000' : '#fff' };
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${ props => props.theme.buttonContainer.hover.backGroundColor };
    }
`;

export const ButtonIcon = styled.img`
    width: 30px;

    //filter (invert color)
    ${ props => ( props.theme.themeName === 'dark' ? 'filter: grayscale(1) invert(1);' : undefined )}
`;

export const MenuContainer = styled.div<{ $openDropdownMenu?: boolean }>`
    display: ${ ({ $openDropdownMenu }) => $openDropdownMenu ? 'block' : 'none' };
    z-index: 1;
    position: absolute;
    bottom: 50px;
    right: 30px;
    width: 200px;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.fontColor };
    border: 1px solid #ccc;
`;

export const MenuItem = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    align-items: center;

    &:hover {
        background-color: ${ props => props.theme.menuItem.hover.backGroundColor };
    }

    .menu-icons {
        width: 20px;
        margin-right: 5px;

        //filter (invert color)
        ${ props => ( props.theme.themeName === 'dark' ? 'filter: grayscale(1) invert(1);' : undefined )}
    }
`;
