import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Container, Content, Accordion} from 'native-base';

const dataArray = [
	{ title: "Profile", content: "Lorem ipsum dolor sit amet"},
	{ title: "Favorites", content: "Lorem ipsum dolor sit amet"},
	{ title: "Location Tracking", content: "Lorem ipsum dolor sit amet"},
	{ title: "Help Center", content: "Lorem ipsum dolor sit amet"},
	{ title: "My Account", content: "Lorem ipsum dolor sit amet"},
	
];

export default class AccordionExample extends Component {
	render() {
		return(
			<View>
				<StatusBar hidden={true} />
				<Accordion 
					dataArray={dataArray} 
					contentStyle={{ color: "green" }}
					headerStyle={{ backgroundColor: "#ccc"}}
					 />
			</View>
		);
	}
}


const styles = {
	arrayText:{
		color: '#666',
	}
}