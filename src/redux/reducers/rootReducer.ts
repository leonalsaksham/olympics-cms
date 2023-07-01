import { combineReducers } from 'redux';
import HotelSlice from '../slice/hotelSlice';
import roomSlice from '../slice/roomSlice';
import UserSlice from '../slice/userSlice'

const rootReducer = combineReducers({
    usersReducer: UserSlice,
    hotelsReducer: HotelSlice,
    roomsReducer : roomSlice,
});

export default rootReducer;