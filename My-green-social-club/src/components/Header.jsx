import React, { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

function Header() {
    useEffect(() => {

        TweenMax.from('.logo-text h1', 1, {
            opacity: 0,
            y: -50,
            ease: Power3.easeOut,
            delay: 0.5
        });
    }, []);

    return (
        <header id="home">
            <div className="logo">
                <img src="https://www.bigmotive.com/wp-content/uploads/2022/08/Wandertag-3.gif" alt="" />
                <div className="logo-text">
                    <h1>green <span>social club</span></h1>
                </div>
            </div>
            <nav>
                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
                <div className="wrapper">
                    <div className="links">
                        <ul>
                            <li><a href="#home">home</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href="#upcoming">upcoming</a></li>
                            <li><a href="#become-a-member">membership</a></li>
                            <li><a href="#sign-up">sign up</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </header>
    );
}

export default Header;

