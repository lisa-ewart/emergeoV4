// #5d6d7e grey blue
// #34495e dark blue
// #d0ece7 aqua
// #abebc6 lime
// #82e0aa darker lime
// #186a3b evergreen
//#F7882F orange


import React, { Component } from 'react';
import { StyleSheet,
	    Text,
	    Button,
	    View,
	    TouchableHighlight, TouchableOpacity,
	    Image,} from 'react-native';
import Auth from './Auth.js';
import {connect} from 'react-redux';

import {accessPosition, watchPosition} from '../actions/location_actions';
import {location} from '../reducers';
import {StackNavigator} from 'react-navigation';

class StartScreen extends Component{

componentWillMount(){
	if(this.props.screenProps.currentUser != null){

	this.props.accessPosition();
	}
}
    render(){  
		const {loggedIn, currentUser} = this.props.screenProps
		const {navigate} = this.props.navigation

        return(
        	<View style={styles.containerStyle}>
	        	<View style={{flexDirection:'row', flexWrap:'wrap'}}>
	        		<Text style={styles.textStyle}>emergeo</Text>
	        	</View>

	        	<View >
	        		<Image style={styles.imageStyle} source={require('../components/logo.png')} />
	        	</View>

	        	<View >
	        		<Auth loggedIn={loggedIn} currentUser={currentUser} navigate={navigate}/>
	        	</View>
	        	
        	</View>
     );   
    };
};


var styles = StyleSheet.create({
	containerStyle:{
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle:{
		fontSize:25,
		color: '#77C9D4'
	},
  imageStyle: {
  	height:150,
  	width:80,
  	marginTop:15,
  	marginBottom: 35,
  },
  spanText: {
  	fontSize: 44,
  	color: '#666',
  	marginTop:-13,
  	fontWeight:"300"
  },
 
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: '#5d6d7e',
  },
});

const mapStateToProps = ({location}) => ({location});

export default connect(mapStateToProps, {accessPosition})(StartScreen);


