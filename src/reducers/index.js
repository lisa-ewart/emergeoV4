import {combineReducers} from 'redux';
import location from './location_reducer';
import user from './profile_reducer';

import data from './data';
import services from './servicesReducer';
import service_list from './servicelist_reducer';

const rootReducers= combineReducers({
 
 data,
 location,
 user,
 services,
 service_list

});


export default rootReducers;