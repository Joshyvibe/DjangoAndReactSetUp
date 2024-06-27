import React from "react";
import './../../static/css/Header.css';




const Header = () => {
    return (
        <div className="header">
            <div className="header-background"></div>
            <div className="header-contents">
                <h2>Tech level up at its peak</h2>
                <p>We do the working, we believe in impossibility</p>
                <button>See more</button>
            </div>
        </div>    
    )
}

export default Header;