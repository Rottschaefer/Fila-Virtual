import React from 'react';
import { StyledBotao } from './StyledBotao';
import { goTo } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const Botao = ({ children, path}) => {

    const navigate = useNavigate();
    
    return (
        <StyledBotao onClick={()=>goTo(navigate, path)}>
            {children}
        </StyledBotao>
    );
};

