// ActivityDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetails from '../components/ActivityDetails';

function ActivityDetailsPage() {
    const { id } = useParams();
    return (
        <div>
            <ActivityDetails id={id} />
        </div>
    );
}

export default ActivityDetailsPage;
