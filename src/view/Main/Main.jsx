import React from 'react';
import Study from '../../Images/Study.svg';
import Header from '../../components/Header/Header'
import Waves from '../../Images/Waves2.svg'

import "./Main.css";

function MainView(){
    return( 
        <div className="all">
            <div className="waves">
                <img src={Waves} height="1000" ></img>
            </div>
            <div className="all-header"> 
                <Header className="header">Notre Alunos</Header> 
                <div className="button-pos"><button className="button">Entrar</button></div>
            </div>

            <div className="content">
                <div className="image-study">
                    <img src={Study} height="450"></img>
                </div>
                <div className="main-text">
                    <h1>Lorem ipsum dolor sit amet, ea propriae hendrerit mea.</h1>
                    <p>Mucius vulputate eos no, novum possim ne has. Mea eu magna mentitum. Vim legere albucius iracundia ea. Vis justo verear fastidii eu, in vim legere meliore. Vix ex maiorum dissentias, eos an ceteros scribentur conclusionemque. Pri diam alia ea.</p>
                </div>
            </div>
        </div>   
      
    );
}

export default MainView;