import {database} from '../firebase';



// ActionCreator exports
export const GRAB_SERVICES = 'grab_services';
export const MARK_CHECKED = 'mark_checked';
export const SELECT_SERVICE = 'select_service';



// Add services to firebase

export const addServices=(services) =>{
	return dispatch => {
		database.ref('Users/' + uid).child('Services').set({
			myServices: services
			
		})
	}
	
}

// Get services from firebase
export const grabServices = () => {
	return dispatch => {
		database.ref('Users/' + uid).child('Services').on('value', data =>{
			dispatch({
				type: GRAB_SERVICES,
				payload: data.val()
			})
		})
	}
}


// Check The serevice box
export const checkService = () =>{
    return{
        type: CHECKED,
        payload: true
    }
}

// record the selected service
export const selectService = (selectedServices) =>{
	return{
		type: SELECT_SERVICE,
		payload: selectedServices
	}
}
