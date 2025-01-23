import React from 'react';
import { StyledBotao } from './StyledBotao';
import { goTo } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const Botao = ({ children, path, onClickFunction}) => {

    const handleClick = () => {
        if (onClickFunction) onClickFunction();
    };
    
    return (
        <StyledBotao onClick={handleClick}>
            {children}
        </StyledBotao>
    );
};

