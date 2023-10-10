import {
    ButtonContainer,
    ButtonIcon,
    Container,
    HeaderButtons,
    LoggedButton,
    LoginButton,
    LogoContainer,
    LogoImage,
    LogoImageContainer,
    SearchButton,
    SearchContainer,
    SearchContainerMobile,
    SearchInput,
    SearchInputContainer,
    SearchInputContainerMobile,
    TogglerShowInput
} from "./style";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterfaceContext } from "../../contexts/interfaceContext";
import { UserContext } from "../../contexts/userContext";

import HamburguerIcon from '../../assets/hamburger-icon.png';
import SearchIcon from '../../assets/search-icon.png';
import MicrophoneIcon from '../../assets/microphone-icon.png';
import LoginIcon from '../../assets/login-icon.png';
import ButtonBack from '../../assets/button-back.png';
import ThemeSwitcherIcon from '../../assets/theme-switcher-icon.png';
import LogoutIcon from '../../assets/logout-icon.png';


function Header() {
    const navigate = useNavigate();

    const { openMenu, setOpenMenu, openDropdownMenu, setOpenDropdownMenu, openMenuMobile, setOpenMenuMobile, showInput, setShowInput, themeToggler } = useContext(InterfaceContext);
    const { login, logOut, user } = useContext(UserContext);

    const [searchParam, setSearchParam] = useState('');
    
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin="0 10px 0 0">
                    <ButtonIcon src={HamburguerIcon} alt="" />
                </ButtonContainer>

                <ButtonContainer tabIndex={0} className="menu-button-mobile" onClick={() => { setOpenMenuMobile(!openMenuMobile); setOpenMenu(true) }} onBlur={() => setTimeout(() => {
                    setOpenMenuMobile(false)
                }, 200)} margin="0 10px 0 0">
                    <ButtonIcon src={HamburguerIcon} alt="" />
                </ButtonContainer>

                <LogoImageContainer>
                    <LogoImage onClick={() => navigate('/')} />
                </LogoImageContainer>
            </LogoContainer>

            <TogglerShowInput $showInput={showInput} onClick={ () => setShowInput(!showInput) }>
                <ButtonIcon src={SearchIcon} />
            </TogglerShowInput>

            <SearchContainerMobile $showInput={showInput} >
                <div className="back-button" onClick={ () => setShowInput(!showInput) } >
                    <ButtonIcon src={ButtonBack} />
                </div>
                
                <SearchInputContainerMobile>
                    <input type="text" placeholder="Pesquisar" value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />    
                </SearchInputContainerMobile>

                <div className="search-button" onClick={() => navigate(`/search?query=${searchParam}`)}>
                    <ButtonIcon src={SearchIcon} />
                </div>
            </SearchContainerMobile>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" value={searchParam} onChange={(e) => setSearchParam(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? navigate(`/search?query=${searchParam}`) : undefined } />
                </SearchInputContainer>
                
                <SearchButton onClick={() => navigate(`/search?query=${searchParam}`)}>
                    <ButtonIcon src={SearchIcon} alt="" />
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon src={MicrophoneIcon} alt="" />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>

                {
                    login ?
                        <>
                            <LoggedButton margin="0 5px 0 0" onClick={() => setOpenDropdownMenu(!openDropdownMenu)} onBlur={() => setTimeout(() => {
                                setOpenDropdownMenu(false)
                            }, 200) } >
                                <span>{ user?.name ? user.name.charAt(0) : '?' }</span>
                            </LoggedButton>

                            <ButtonContainer onClick={() => logOut()}>
                                <ButtonIcon src={LogoutIcon} alt="" />
                            </ButtonContainer>
                        </>
                    :
                        <LoginButton onClick={() => navigate('/sign-in')}>
                            <ButtonIcon src={LoginIcon} alt="" />

                            <span>Fazer login</span>
                        </LoginButton>
                }

                <ButtonContainer className="theme-switcher" margin='0 0 0 10px' onClick={() => themeToggler()}>
                    <ButtonIcon src={ThemeSwitcherIcon} alt="" />
                </ButtonContainer>
            </HeaderButtons>
        </Container>
    )
}

export default Header;
