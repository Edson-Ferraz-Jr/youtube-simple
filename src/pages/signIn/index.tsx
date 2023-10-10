import { Container, FormContainer, FormInputs, FormButtons } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import GoogleLogo from '../../assets/google-logo.png';
import YouTubeLogo from '../../assets/youTube-logo.png';


function SignIn() {
    const navigate = useNavigate();

    const { handleLogin, login } = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

                        <h2>Fazer login</h2>

                        <span>Prosseguir no YouTube</span>
                    </header>
                    
                    <FormInputs>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                    </FormInputs>
                    
                    <input type="checkbox" checked={showPassword} id="show-password" onChange={() => setShowPassword(!showPassword)} />
                    <label htmlFor="show-password">Mostrar senha</label>
                    
                    <FormButtons>
                        <span onClick={() => navigate('/sign-up')}>Criar Conta</span>

                        <button onClick={() => handleLogin(email, password)}>Login</button>
                    </FormButtons>
                </FormContainer>
            </Container>
        </>
    );
}

export default SignIn;