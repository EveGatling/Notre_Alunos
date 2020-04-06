import React from 'react';
import Header from '../../components/Header/Header';
import Rectangle from '../../Images/LoginImg3.svg';
import {useHistory} from "react-router-dom";

import "./Login.css";

function LoginView(){
    return(
        <div className="All-login">
            <Header className="header-login">Notre Alunos</Header>

            {/* Create New */}
            <div className="new-login-box">
                <img src={Rectangle} className="blue-rec"></img>
                <h1 className="create-title">Não possui uma conta?</h1>
                <h3 className="create-subtitle">Crie uma agora!</h3>
                <button className="btn-new-login">
                    Criar conta
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                </button>
            </div>
            
            {/* Login */}
            <div className="login-box">
                <p className="title-login">Entrar</p>
                <input placeholder="Email"></input>
                <input placeholder="Senha" type="password"></input>
                <div>
                    <button className="btn-login">Entrar</button>
                </div>
            </div>
            
        </div>
    );
}

export default LoginView;