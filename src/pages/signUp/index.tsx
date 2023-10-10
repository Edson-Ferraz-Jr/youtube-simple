import { Container, FormContainer, FormInputs, FormButtons } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import GoogleLogo from '../../assets/google-logo.png';
import YouTubeLogo from '../../assets/youTube-logo.png';


function SignUp() {
    const navigate = useNavigate();

    const { signUp, login } = useContext(UserContext);
        
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    

    useEffect(() => {
        if(login === true) {
            navigate('/')
        }
    }, [login]);
    
    return (
        <>
            <Container>
                <img id="youtube-logo" src={YouTubeLogo} alt="Youtube Logo" onClick={() => navigate('/')} />
                
                <FormContainer>
                    <header>
                        <img src={GoogleLogo} alt="Google Logo" />

                        <h2>Criar Conta</h2>

                        <span>Prosseguir no YouTube</span>
                    </header>
                    
                    <FormInputs>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuário" />
                        
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                        
                        {/* <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Corfirme sua senha" /> */}
                    </FormInputs>
                    
                    <input type="checkbox" checked={showPassword} id="show-password" onChange={() => setShowPassword(!showPassword)} />
                    <label htmlFor="show-password">Mostrar senha</label>
                    
                    <FormButtons>
                        <span onClick={() => navigate('/sign-in')}>Já tenho uma conta</span>

                        <button onClick={ () => signUp(userName, email, password) }>Sign-up</button>
                    </FormButtons>
                </FormContainer>
            </Container>
        </>
    );
}

export default SignUp;