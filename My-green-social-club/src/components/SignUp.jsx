import React from 'react';

function SignUp() {
    return (
        <section className="sign-up" id="sign-up">
            <div className="sign-up-container">
                <div className="left">
                    <div className="login-text">
                        <p>Sign up for our newsletter to be the first to hear about upcoming walks and events!</p>
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
                </div>
                <div className="right">
                    <img src="https://i.postimg.cc/WbgQvDq7/habibi.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default SignUp;

