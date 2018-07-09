
export const ACCESS_POSITION = 'access_position';
export const WATCH_POSITION = 'watch_position';


//access user location
export const accessPosition = () =>{
    return dispatch =>{
        navigator.geolocation.getCurrentPosition( (position) => {
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
                dispatch({
                    type: ACCESS_POSITION,
                    payload: {
                        lat,
                        long
                    } 
                })
        }, (err) =>{
          console.log(err)
        }, {timeout: 20000});
    }
}

// set user location in database
export const setLocation = (lat, long) =>{
    return dispatch=>{
    database.ref('Users/' + uid).child('Location').set({
                    lat,
                    long
                });
        
    }
}

// Watch user location

export const watchPosition = () =>{
    return dispatch =>{
        let watchID = navigator.geolocation.watchPosition((position)=>{
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
            dispatch({
                type: WATCH_POSITION,
                payload: {
                    lat,
                    long,
                    watchID
                }
            })
        }, (err) =>{
            console.log(err)
            }, {timeout: 20000})
    }
}

// clear user watch
export const clearWatch = (watchID) =>{
    navigator.geolocation.clearWatch(watchID);
};




