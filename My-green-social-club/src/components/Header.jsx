import React from 'react';

function Header() {
    return (
        <header id="home">
            <div className="logo">
                <img src="https://www.bigmotive.com/wp-content/uploads/2022/08/Wandertag-3.gif" alt=""/>
                <div className="logo-text">
                    <h1>green <span>social club</span></h1>
                </div>
            </div>
            <nav>
                <input type="checkbox" id="active"/>
                <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
                <div className="wrapper">
                    <div className="links">
                        <ul>
                            <li><a href="#home">home</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href="#upcoming">upcoming</a></li>
                            <li><a href="#become-a-member">become a member</a></li>
                            <li><a href="#sign-up">sign up</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </header>
    );
}

export default Header;

