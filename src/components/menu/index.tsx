import { ButtonIcon, Container, MenuItem, MenuSection } from "../menu/style";

import { useContext } from "react";
import { InterfaceContext } from "../../contexts/interfaceContext";

import { useNavigate } from "react-router-dom";

import HomeIcon from '../../assets/home-icon.png';
import ShortsLogo from '../../assets/shorts-logo.png';
import SubscriptionsIcon from '../../assets/subscriptions-icon.png';
import LibraryIcon from '../../assets/library-icon.png';
import QuestionMark from '../../assets/question-mark.png';

const menuItems = [
    { name: 'Início', link: '/', icon: HomeIcon, menuSection: 'main' },
    { name: 'Shorts', link: '/shorts', icon: ShortsLogo, menuSection: 'main' },
    { name: 'Inscrições', link: '/subscriptions', icon: SubscriptionsIcon, menuSection: 'main' },
    { name: 'Biblioteca', link: '/library', icon: LibraryIcon, menuSection: 'main' },
    { name: 'example', link: '', icon: QuestionMark, menuSection: 'other1' },
    { name: 'example', link: '', icon: QuestionMark, menuSection: 'other1' },
    { name: 'example', link: '', icon: QuestionMark, menuSection: 'other2' },
    { name: 'example', link: '', icon: QuestionMark, menuSection: 'other2' },
    { name: 'example', link: '', icon: QuestionMark, menuSection: 'other2' }
];

function Menu() {
    const navigate = useNavigate();
    
    const { openMenu, openMenuMobile } = useContext(InterfaceContext);

    return (
        <Container $openMenu={openMenu} $openMenuMobile={openMenuMobile}>
            <MenuSection $openMenu={openMenu} $menuSectionTitle="main" >
                {
                    menuItems.map((item, index) => (
                        item.menuSection == 'main' ?
                            <MenuItem $openMenu={openMenu} onClick={item.link ? () => navigate(item.link) : undefined} key={index} >
                                <ButtonIcon src={item.icon} alt="" />

                                <span>{item.name}</span>
                            </MenuItem>
                        :
                            undefined
                    ))
                }
            </MenuSection>

            <MenuSection $openMenu={openMenu} $menuSectionTitle="other1" >
                {
                    menuItems.map((item, index) => (
                        item.menuSection == 'other1' ?
                            <MenuItem $openMenu={openMenu} onClick={item.link ? () => navigate(item.link) : undefined} key={index} >
                                <ButtonIcon src={item.icon} alt="" />

                                <span>{item.name}</span>
                            </MenuItem>
                        :
                            undefined
                    ))
                }
            </MenuSection>

            <MenuSection $openMenu={openMenu} $menuSectionTitle="other2" >
                {    
                    menuItems.map((item, index) => (
                        item.menuSection == 'other2' ?
                            <MenuItem $openMenu={openMenu} onClick={item.link ? () => navigate(item.link) : undefined} key={index} >
                                <ButtonIcon src={item.icon} alt="" />

                                <span>{item.name}</span>
                            </MenuItem>
                        :
                            undefined
                    ))
                }
            </MenuSection>
        </Container>
    );
}

export default Menu;
