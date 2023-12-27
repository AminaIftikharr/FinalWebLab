import { BOOK_MISSION, JOIN_MISSION } from './actionTypes';

const initialState = {
bookedMissions: [],
joinedMissions: [],
};

const missionReducer = (state = initialState, action) => {
switch (action.type) {
    case BOOK_MISSION:
    return {
        ...state,
        bookedMissions: [...state.bookedMissions, action.payload.missionId],
    };
    case JOIN_MISSION:
    return {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload.missionId],
    };
    default:
    return state;
}
};

export default missionReducer;
