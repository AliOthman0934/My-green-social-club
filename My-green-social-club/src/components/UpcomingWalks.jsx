import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext/DataContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function UpcomingWalks() {
    const { activities } = useContext(DataContext);
    const containerRef = useRef(null);

    useEffect(() => {
        activities.forEach((activity, index) => {
            gsap.from(`.project-card-${index}`, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                scrollTrigger: {
                    trigger: `.project-card-${index}`,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, [activities]);

    return (
        <section className="upcoming" id="upcoming" ref={containerRef}>
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
                {activities.map((activity, index) => (
                    <div key={index} className={`project-card project-card-${index}`}>
                        <div className="image ">
                            <img src={activity.picture} alt="" className="img1" id="img1" />
                        </div>

                        <div className="project-info">
                            <strong className="project-titel">
                                <span>{activity.title}</span>
                                <Link to={`/activity/${activity.id}`}>More Information</Link>
                            </strong>
                        </div>

                        <div className="description">
                            <p className="project-cat">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default UpcomingWalks;






