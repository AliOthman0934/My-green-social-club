// This code is related to fetching the data from firebase.
//######################################################

// import React, { createContext, useContext, useState } from 'react';

// const ActivityContext = createContext();

// export const useActivityContext = () => useContext(ActivityContext);

// export const ActivityProvider = ({ children }) => {
//     const [activityDetails, setActivityDetails] = useState(null);



//     const fetchActivityDetails = async (id) => {
//         try {
//             const response = await fetch(`${id}`);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch activity details");
//             }
//             const data = await response.json();
//             setActivityDetails(data);
//         } catch (error) {
//             console.error("Error fetching activity details:", error);
//         }
//     };

//     return (
//         <ActivityContext.Provider value={{ activityDetails, fetchActivityDetails }}>
//             {children}
//         </ActivityContext.Provider>
//     );
// };

// export default ActivityProvider;



// This code related to fetching the data from json file.
//############################################### 

import React, { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();

export const useActivityContext = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
    const [activityDetails, setActivityDetails] = useState(null);

    const fetchActivityDetails = async (id) => {
        try {
            const response = await fetch('/UpComingWalkeDatat.json'); // Adjusted the path to your JSON file
            if (!response.ok) {
                throw new Error("Failed to fetch activity details");
            }
            const data = await response.json();
            const activity = data.find(item => item.id === parseInt(id, 10)); // Filter data based on ID
            setActivityDetails(activity);
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




