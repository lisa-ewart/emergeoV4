import {ACCESS_POSITION, WATCH_POSITION} from '../actions/location_actions';

export default (state={}, action) =>{
    switch(action.type){
        case ACCESS_POSITION:
            return action.payload;
        case WATCH_POSITION:
            return action.payload
        default:
            return state
    }
}