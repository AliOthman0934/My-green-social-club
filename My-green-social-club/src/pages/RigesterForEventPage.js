
import React from 'react';
import { useParams } from 'react-router-dom';
import RigesterForEvent from '../components/RigesterForEvent';

function ActivityDetailsPage() {
    const { id } = useParams();
    return (
        <div>
            <RigesterForEvent id={id} />
        </div>
    );
}

export default ActivityDetailsPage;