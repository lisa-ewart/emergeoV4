import {GRAB_SERVICES} from '../actions/services_actions';

export default function (state = {}, action){
	switch(action.type){
		case GRAB_SERVICES:
			return action.payload;
		default:
			return state;
	}
}