import styled from "styled-components";

export const Container = styled.div<{ $openDropdownMenu: boolean, $isLogged: boolean }>`
    display: ${ ({ $openDropdownMenu, $isLogged }) => $openDropdownMenu && $isLogged ? 'block' : 'none' };
    z-index: 1;
    position: fixed;
    top: 60px;
    right: 10px;
    width: 200px;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.fontColor };
    border: 1px solid #ccc;

    &::before {
        content: '';
        position: absolute;
        top: -9px;
        right: 112px;
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        background-color: ${ props => props.theme.backGroundColor };
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;

        @media(max-width: 768px) {
            right: 50px;
        }
    }

    .warning {
        color: red;
    }
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
