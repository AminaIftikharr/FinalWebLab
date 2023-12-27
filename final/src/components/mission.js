import React from 'react';
import { connect } from 'react-redux';
import { bookMission, joinMission } from './actions';

const MissionComponent = ({ bookMission, joinMission, missions }) => {
const missionId = 1;

const handleBookMission = () => {
    bookMission(missionId);
};

const handleJoinMission = () => {
    joinMission(missionId);
};

return (
    <div>
    <button onClick={handleBookMission}>Book Mission</button>
    <button onClick={handleJoinMission}>Join Mission</button>
    <p>Booked Missions: {missions.bookedMissions.join(', ')}</p>
    <p>Joined Missions: {missions.joinedMissions.join(', ')}</p>
    <h1>Mission Component</h1>
    </div>
);
};

const mapStateToProps = (state) => ({
  missions: state.missions,
});

const mapDispatchToProps = {
  bookMission,
  joinMission,
};

export default connect(mapStateToProps, mapDispatchToProps)(MissionComponent);
