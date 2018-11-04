import {FETCH_SERVICE_LIST} from '../actions/services_actions';


export default function(state = {}, action){
    switch(action.type){
        case FETCH_SERVICE_LIST:
            return action.payload;
        default:
            return state
    }
}