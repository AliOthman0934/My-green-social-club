import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function ActivityDetails(props) {
    const { id } = useParams();
    const [activityDetails, setActivityDetails] = useState(null);

    useEffect(() => {
        const fetchActivityDetails = async () => {
            try {
                const response = await fetch(`https://http-ce833-default-rtdb.firebaseio.com/events/${id}.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch activity details");
                }
                const data = await response.json();
                setActivityDetails(data);
            } catch (error) {
                console.error("Error fetching activity details:", error);
            }
        };

        fetchActivityDetails();
    }, [id]);

    if (!activityDetails) {
        return <div>Loading...</div>;
    }

    return (
        <section className="activity-details" id="activity-details">
            <div className="activity-details-container">
                {/* Left Content */}
                <div className="left">
                    <h2 className="details-title">{activityDetails.title}</h2>
                    <p className="details-description">{activityDetails.description}</p>
                    <div className="details-info">
                        <strong>Date:</strong> {activityDetails.date}<br />
                        <strong>Location:</strong> {activityDetails.location}<br />
                        <div className="program-plan">
                            <strong>Program Plan:</strong>
                            <ul>
                                {Object.entries(activityDetails.program_plan).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key.replace(/_/g, " ")}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <strong>Code of Conduct:</strong>
                        <ul>
                            {Object.values(activityDetails.code_of_conduct).map((conduct, index) => (
                                <li key={index}>{conduct}</li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/activity/Rigester">Rigester</Link>
                </div>
                {/* Right Image */}
                <div className="right">
                    <Link to="/" className="link-to-home">Back Home</Link>
                    <img src={activityDetails.picture} alt="" className="activity-image" />
                </div>
            </div>
        </section>
    );
}

export default ActivityDetails;





