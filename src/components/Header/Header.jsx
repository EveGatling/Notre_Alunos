import React, { useState } from 'react';
import "./Header.css";


const Header = (props) => {
    const hiddenLeft = props["hidden-buttons"].indexOf("left") > -1;
    const hiddenRight = props["hidden-buttons"].indexOf("right") > -1;
    
    return (
        <div className="header-box">
            <div className="header">
                <div className="box-left"></div>
                <div className="box-center">{props.children}</div>
                <div className="box-right"></div>
                
            </div>
        </div>
    );
}

Header.defaultProps = {
    "hidden-buttons": []
}

export default Header;