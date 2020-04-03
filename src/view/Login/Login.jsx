import React from 'react';
import Header from '../../components/Header/Header';
import Rectangle from '../../Images/BlueRec.svg';
import {useHistory} from "react-router-dom";

import "./Login.css";

function LoginView(){
    return(
        <div className="All-login">
            <Header className="header-login">Notre Alunos</Header>
            <img src={Rectangle} className="blue-rec" height="800"></img>
            <div className="login-box">
                <p className="title-login">Entrar</p>
                <input placeholder="Email"></input>
                <input placeholder="Senha" type="password"></input>
            </div>
            <buttom className="btn-login">Entrar</buttom>
        </div>
    );
}

export default LoginView;