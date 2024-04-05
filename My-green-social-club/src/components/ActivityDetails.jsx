import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
        <div className="details-content">
            <div className="details-grid-container">
                <div className="details-image-section">
                    <img src={activityDetails.picture} alt="" className="activity-image" />
                </div>

                <div className="details-section">
                    <h2 className="details-title">{activityDetails.title}</h2>
                    <p className="details-description">{activityDetails.description}</p>
                    <div className="details-info">
                        <strong>Date:</strong> {activityDetails.date}<br />
                        <strong>Location:</strong> {activityDetails.location}<br />
                        <strong>Program Plan:</strong>
                        <ul>
                            {Object.entries(activityDetails.program_plan).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key.replace(/_/g, " ")}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                        <strong>Code of Conduct:</strong>
                        <ul>
                            {Object.values(activityDetails.code_of_conduct).map((conduct, index) => (
                                <li key={index}>{conduct}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivityDetails;




