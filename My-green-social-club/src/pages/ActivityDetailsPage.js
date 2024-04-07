import React from 'react';
import ActivityDetails from "../components/ActivityDetails";
import { ActivityProvider } from '../components/DataContext/ActivityContext';

function ActivityDetailsPage() {
    return (
        <ActivityProvider>
            <div>
                <ActivityDetails />
            </div>
        </ActivityProvider>
    );
}

export default ActivityDetailsPage;

