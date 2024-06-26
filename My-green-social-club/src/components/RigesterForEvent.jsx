import React from "react";
import { Link } from "react-router-dom";


function RigesterForEvent(props) {
    return (
        <section className="sign-up rigester-page" id="sign-up">
            <div className="sign-up-container">
                <div className="left">
                    <div className="login-text">
                        <p>Register now for the event to secure your spot and stay informed about all the details!</p>
                    </div>
                    <div className="col-22 ">
                        <form action="" method="post">
                            <div className="user">
                                <input type="text" name="user" className="user-name" placeholder="First Name" />
                                <div className="user1">
                                    <input type="text" name="user" className="user-name" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="password">
                                <input type="text" name="password" className="password-input" placeholder="Age" />
                                <input type="email" name="password" className="password-input" placeholder="Email" />
                                <input type="text" name="password" className="password-input" placeholder="Phonnumber" />
                            </div>
                            <div className="submit">
                                <button type="submit" className="submit">ENTER</button>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </form>
                    </div>
                    <div>
                        <Link to="/" className="link-to-home rigster-to-home">Back Home</Link>
                    </div>
                </div>
                <div className="right">

                    <img src="https://i.postimg.cc/WbgQvDq7/habibi.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default RigesterForEvent;