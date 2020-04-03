import React from 'react';
import Header from '../../components/Header/Header';
import {useHistory} from "react-router-dom";

import "./Login.css";

function LoginView(){
    return(
        <div className="All-login">
            <Header className="header-login">Notre Alunos</Header>
            <div className="login-box">
                <p>Usuário</p>
                <input></input>
                <p>Senha</p>
                <input></input>
            </div>
        </div>
    );
}

export default LoginView;