import React,{Component} from 'react';
import {Text,
		Card,
		View,
		StyleSheet
} from 'react-native';
import {MapView, Marker, AnimatedRegion} from 'react-native-maps';

const {width, height} = Dimensions.get('window')


const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATION = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapScreen1 extends Component {

	
		state = {
			initialPosition: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0,
				longitudeDelta: 0,
			},
			markerPosition: {
				latitude: 0,
				longitude: 0,
			}
		}
	

	watchID: ?number = null

	componentDidMount() {
		navigator.geolocation .getCurrentPosition((position) => {
			const lat = parseFloat(position.coords.latitude)
			const long = parseFloat(position.coords.longitude)

			const initialRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}

			this.setState({initialPosition: initionRegion})
			this.setState({markerPosition: initialRegion})
		}, (error) => alert(JSON.stringify(error)), 
		{enableHighAccuracy: true, timeout: 20000, maximumAge:1000})

		this.watchID = navigator.geolocation/watchPosition((position => {
			const lat = parseFloat(position.coords.latitude)
			const long = parseFloat(position.coords.longitude)

			const lastRegion = {
				latitide: lat,
				longitude: long,
				longitudeDelta: LONGITUDE_DELTA,
				latitudeDelta: LATITUDE_DELTA
			}

			this.setState({initialPosition:lastRegion})
			this.setState({markerPosition: lastRegion})
		})
			)
	}

	render(){
			return (
	      		<View>
	      			<MapView
	      				style={styles.map}
	      				initialRegion={this.state.markerPosition}
	      			>
		      			// <MapView.Marker
		      			// 	coordinate={this.state.markerPosition}
		      			// >
		      			// 	<View style={styles.radius}>
		      			// 		<View style={styles.marker}>

		      			// 		</View>
		      			// 	</View>
		      			// </MapView.Marker>
	      			</MapView>
	      		</View>
	    	);
   }
}

export default MapScreen1;