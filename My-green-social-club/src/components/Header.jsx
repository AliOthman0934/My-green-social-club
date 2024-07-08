import React, { useEffect, useRef } from 'react';
// import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin'; // Import CSSPlugin

gsap.registerPlugin(CSSPlugin);

function Header() {
    const timeline = gsap.timeline();
    let text1 = useRef();
    let text2 =useRef();

    useEffect(() => {
        timeline.from([text1,text2,] ,{
            opacity: 0,
            duration:3,
            delay:2,
            y:200,
            stagger:{
                amount:0.6
            }
        // TweenMax.from('.logo-text h1', 1, {
        //     opacity: 0,
        //     y: -50,
        //     ease: Power3.easeOut,
        //     delay: 0.5
        // });
        });
    },[timeline])

    return (
        <header id="home">
            <div className="logo">
                <img src="https://www.bigmotive.com/wp-content/uploads/2022/08/Wandertag-3.gif" alt="" />
                <div className="logo-text">
                    <h1 ref={text1}>green <span ref={text2}>social club</span></h1>
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

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';


// function Header() {
//     let text1 = useRef();
//     let text2 = useRef();

//     useEffect(() => {
//         const tl = gsap.timeline();
//         tl.from([text1.current, text2.current], {
//             duration: 3,
//             delay: 2,
//             y: 200,
//             opacity:0,
//             stagger: {
//                 amount: 0.6
//             }
//         });
//     }, []);

//     return (
//         <header id="home">
//             <div className="logo">
//                 <img src="https://www.bigmotive.com/wp-content/uploads/2022/08/Wandertag-3.gif" alt="" />
//                 <div className="logo-text">
//                     <h1 ref={text1}>green <span ref={text2}> social club</span></h1>
//                 </div>
//             </div>
//             <nav>
//                 <input type="checkbox" id="active" />
//                 <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
//                 <div className="wrapper">
//                     <div className="links">
//                         <ul>
//                             <li><a href="#home">home</a></li>
//                             <li><a href="#about">about</a></li>
//                             <li><a href="#upcoming">upcoming</a></li>
//                             <li><a href="#become-a-member">membership</a></li>
//                             <li><a href="#sign-up">sign up</a></li>
//                             <li><a href="#contact">contact</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <div className="icons">
//                 <i className="fab fa-instagram"></i>
//                 <i className="fab fa-facebook"></i>
//                 <i className="fab fa-twitter"></i>
//             </div>
//         </header>
//     );
// }

// export default Header;


