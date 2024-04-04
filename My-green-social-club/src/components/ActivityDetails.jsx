import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ActivityDetails() {
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

    console.log(activityDetails)

    if (!activityDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{activityDetails.title}</h2>
            <p>{activityDetails.description}</p>
            {/* Render other details as needed */}
        </div>
    );
}

export default ActivityDetails;

