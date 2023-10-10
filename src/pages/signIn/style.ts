import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #youtube-logo {
        width: 100px;
        height: auto;
        cursor: pointer;
    }
`;

export const FormContainer = styled.div`
    margin-top: 20px;
    padding: 50px;
    width: 350px;
    height: 400px;
    border: 1px solid ${ props => props.theme.form.borderColor };
    border-radius: 10px;
    
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }
    
    img {
        width: 70px;
    }

    h2 {
        margin: 10px 0;
        font-weight: 400;
    }

    span {
        font-size: 18px;
    }

    @media(max-width: 425px) {
        width: 85%;
        padding: 40px 10px;
    }
`;

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    input {
        display: flex;
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid ${ props => props.theme.form.borderColor };
        font-size: 18px;
        background-color: ${ props => props.theme.backGroundColor };
        color: ${ props => props.theme.fontColor };
    }

    input:focus {
        outline-color: #1a75ff;
    }
`;

export const FormButtons = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    button {
        padding: 10px;
        background-color: #1a75ff;
        color: #fff;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s;
    }

    button:hover {
        background-color: #005ce6;
    }

    span {
        font-size: 16px;
        font-weight: 500;
        color: #1a75ff;
        cursor: pointer;
    }

    span:hover {
        color: #005ce6;
    }
`;
