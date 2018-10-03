
//change button (service) to question with check boxes
//add new screen with services to select
//change select username to enter first name and last name
//remove mini bio and photo select from create profile 



import React, { Component } from 'react';
import { StyleSheet,
	    Text,
      TextInput,
	    View,
	    TouchableOpacity,
	    ScrollView, 
      StatusBar, Image
	    } from 'react-native';
import RadioForm, {RadioButton, RadioGroup, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, CheckBox, ListItem, Body} from 'native-base';
import {StackNavigator} from 'react-navigation';


import {database} from '../firebase';
import {app} from '../firebase';
// import ServicesProvided from './ServicesProvided';


var radio_props = [
  {label: 'yes', value: 0 },
  {label: 'no', value: 1 }
];

function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).set({
    username: username
  });
}

class CreateProfile extends Component{

  state = {
    username: "",
    services: ""
  }
 
    render(){  
      const {navigate} = this.props.navigation
      const {username} = this.state;
      console.log(this.state);
      console.log("testLisa")
        return(
        	<Container style={styles.containerStyle} >
          <StatusBar hidden={true} />

        	<View>
        	<View style={styles.containerStyle}>
            <View >
              <Image style={styles.imageStyle} source={require('../components/logo.png')} />
            </View>

        	  <View>
	        	<Text style={styles.textStyle}>Create a Username</Text>
	          </View>

            <TextInput 
              style={styles.inputStyle}   
              placeholder="choose a username"
              onChangeText = {(username)=>this.setState({username})}
              value = {username}
              >

            </TextInput>

	          <Text style={{color:'green', fontSize: 15, fontWeight:'bold', marginTop:30, marginBottom: 30}}>Will You Provide a Service on Emergeo?</Text>
            
            <View>
             <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={'#ccc'}
              buttonInnerColor={'#ccc'}
              buttonOuterColor={'#ccc'}
              selectedButtonColor={'#77C9D4'}
              buttonSize={7}
              formHorizontal={true}
              labelStyle={{paddingRight: 25}}
              labelColor={'#ccc'}
              selectedLabelColor={'green'}
              onPress={(value) => {this.setState({value:value})}}
            />
            </View>
            <ScrollView>
              <TouchableOpacity onPress={this.writeUserData} style={styles.serviceButton}> <Text>Services</Text></TouchableOpacity>
            </ScrollView>

            <View style={styles.center}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyProfile')} style={styles.serviceButton}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
             </View>
        	</View>

        	</View>

      </Container>
     );   
    };
};
// start photo

// end photo
const styles = {
	containerStyle:{
    backgroundColor: '#E9F5F7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height:100,
    width:70,
    marginTop:5,
    marginBottom: 35,
  },
	textStyle:{
		textAlign: 'center',
		fontSize: 20,
		color: 'green',
		marginTop: 15
	},
	textStyle2:{
		textAlign: 'center',
		fontSize: 14,
		color: '#5d6d7e',
		marginTop: 10,
		padding: 10
	},
  buttonText:{
    color:'white'
  },
	inputStyle: {
    padding:10,
    margin:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'#CCCCCC',
    shadowColor: '#CCC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    color: '#5d6d7e',
  },
  serviceButton:{
  	backgroundColor: '#77C9D4',
  	padding: 10,
  	borderRadius: 5,
  	marginTop:25,
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center:{
    justifyContent: 'center',
  }
}

export default CreateProfile;