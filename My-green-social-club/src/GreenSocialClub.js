import React, { Fragment } from 'react';
// import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import UpcomingWalks from './components/UpcomingWalks';
import About from "./components/About";
import OurMembers from './components/OurMembers';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function GreenSocialClub() {
    return (
        <Fragment>
            <Header/>
            <About/>
            <UpcomingWalks/>
            <OurMembers/>
            <SignUp/>
            <Footer/>
        </Fragment>
    );
}

export default GreenSocialClub;



