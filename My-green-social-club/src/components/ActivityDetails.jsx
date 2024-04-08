import React ,{useEffect} from 'react';
import { useActivityContext } from './DataContext/ActivityContext';
import { Link , useParams } from 'react-router-dom';
import Loader from './Loader';


function ActivityDetails(props) {
    const { id } = useParams();
    const { activityDetails, fetchActivityDetails } = useActivityContext();

    useEffect(() => {
        fetchActivityDetails(id);
    }, [id, fetchActivityDetails]);



    if (!activityDetails) {
        return <Loader></Loader>;
    }

    return (
        <section className="activity-details" id="activity-details">
            <div className="activity-details-container">
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
                    <Link to="/activity/Rigester" className="link-to-Rigester">Register</Link>
                </div>
                <div className="right">
                    <Link to="/" className="link-to-home">Back Home</Link>
                    <img src={activityDetails.picture} alt="" className="activity-image" />
                </div>
            </div>
        </section>
    );
}

export default ActivityDetails;







