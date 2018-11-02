import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {auth} from '../firebase';

const SignOutButton = props =>(
	
		<View>
			<TouchableOpacity
				onPress={()=> auth.signOut().then(props.nav.navigate('StartScreen'))}
				style={styles.buttonStyle}
			>
				<Text>
					Sign Out
				</Text>
			</TouchableOpacity>
		</View>
);


const styles = {
	buttonStyle:{
    backgroundColor: '#77C9D4',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
}


export default SignOutButton;