import React from 'react';
import { StyledBotao } from './StyledBotao';
import { goTo } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const Botao = ({ children, path, onClickFunction}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        goTo(navigate, path);
        if (onClickFunction) onClickFunction();
    };
    
    return (
        <StyledBotao onClick={handleClick}>
            {children}
        </StyledBotao>
    );
};

