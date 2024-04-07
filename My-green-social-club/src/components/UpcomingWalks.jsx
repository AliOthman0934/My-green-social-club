import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext/DataContext';

function UpcomingWalks() {
    const { activities } = useContext(DataContext);

    return (
        <section className="upcoming" id="upcoming">
            <div className="box-container">
                <div className="heading head2">
                    <h1>upcoming walks</h1>
                </div>
                <div className="column box1 ">
                    <div className="col col-1 hidden ">
                        <img src="athena.jpg" alt="" />
                        <img src="athena2.jpg" alt="" />
                    </div>
                    <div className="col-2 spi">
                        <h1> get healthy. get social.</h1>
                        <div className="line"></div>
                        <div className="text-box">
                            <p>Join one of our upcoming activities</p>
                            <p>and explore nature together! Click</p>
                            <p>the dates below for more information:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content grid-container">
                {activities.map((activitie, index) => (
                    <div key={index} className="project-card">
                        <div className="image ">
                            <img src={activitie.picture} alt="" className="img1" id="img1" />
                        </div>

                        <div className="project-info">
                            <strong className="project-titel">
                                <span>{activitie.title}</span>
                                <Link to={`/activity/${activitie.id}`}>More Information</Link>
                            </strong>
                        </div>

                        <div className="description">
                            <p className="project-cat">{activitie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )    
}

export default UpcomingWalks;




