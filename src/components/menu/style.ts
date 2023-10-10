import styled from 'styled-components';

export const Container = styled.div<{ $openMenu: boolean, $openMenuMobile: boolean }>`
    background-color: ${ props => props.theme.backGroundColor };
    color: ${ props => props.theme.fontColor };
    width: ${ ({ $openMenu }) => $openMenu ? '250px' : '100px' };
    height: calc(100vh - 55px);
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;

    @media(max-width: 768px) {
        z-index: 1;
        position: fixed;
        display: ${ ({ $openMenuMobile }) => $openMenuMobile ? 'flex' : 'none' };
    }
`;

export const MenuSection = styled.div<{ $openMenu: boolean, $menuSectionTitle?: string }>`
    display: ${({ $openMenu, $menuSectionTitle }) => {
        return (
            !$openMenu && $menuSectionTitle != 'main' ?
                'none'
                :
                'block'
        )
    }};

    width: 100%;
    padding: 15px 0;
    border-bottom: ${({ $openMenu }) => $openMenu ? '1px solid #ccc' : 'none'};
    &:last-child {
        border-bottom: none;
    }
`;

export const MenuItem = styled.div<{ $openMenu: boolean }>`
    width: 98%;
    min-height:  ${({ $openMenu }) => { return $openMenu ? '45px' : '70px' }};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ $openMenu }) => $openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openMenu }) => $openMenu ? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openMenu }) => $openMenu ? '600' : '400'};
        font-size: ${({ $openMenu }) => $openMenu ? '16px' : '12px'};
        margin-left: ${({ $openMenu }) => $openMenu ? '20px' : 'none'};
    }
    
    &:hover {
        background-color: ${ props => props.theme.menuItem.hover.backGroundColor };
    }
    
    i {
        width: 25px;
        text-align: center;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;

    //filter (invert color)
    ${ props => ( props.theme.themeName === 'dark' ? 'filter: grayscale(1) invert(1);' : undefined )}
`;
