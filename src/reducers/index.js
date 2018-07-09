import {combineReducers} from 'redux';
import location from './location_reducer';
import user from './profile_reducer';

import data from './data';
import services from './servicesReducer';

const rootReducers= combineReducers({
 
 data,
 location,
 user,
 services

});


export default rootReducers;