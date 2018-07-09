

// Add services to firebase

export const addServices=(services) =>{
	return dispatch => {
		database.ref('Users/' + uid).child('Services').set({
			myServices: services
			
		})
	}
	
}

// Get services from firebase
export const getServices = () => {
	return dispatch => {
		database.ref('Users/' + uid).child('Services').on('value', data =>{
			dispatch({
				type: FETCH_SERVICES,
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


