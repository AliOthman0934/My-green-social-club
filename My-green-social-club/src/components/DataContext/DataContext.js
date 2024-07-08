// import React, { createContext, useState, useEffect } from 'react';

// const DataContext = createContext();

// const DataContextProvider = ({ children }) => {
//     const [activities, setActivities] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('localhost:3000/api/property/get');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setActivities(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <DataContext.Provider value={{ activities }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// export { DataContext, DataContextProvider  };

import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/UpComingWalkeDatat.json'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setActivities(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ activities }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataContextProvider };

