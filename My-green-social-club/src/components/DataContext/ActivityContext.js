import React, { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();

export const useActivityContext = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
    const [activityDetails, setActivityDetails] = useState(null);



    const fetchActivityDetails = async (id) => {
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

    return (
        <ActivityContext.Provider value={{ activityDetails, fetchActivityDetails }}>
            {children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;



