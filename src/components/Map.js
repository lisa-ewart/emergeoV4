
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
      StatusBar
	    } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';


var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];
 

class MapScreen extends Component{
    render(){  
        return(
          <View>
        	<Container style={styles.containerStyle} >
          </Container>
          
        	<Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            {/*<Button active>*/}
            <Button>
              <Icon active name="mail" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
        </View>

     );   
    };
};
// start photo

// end photo
const styles = {
	containerStyle:{
		flex: 1,
		alignItems: 'center'
	},
	scrollviewStyle:{
		flex:1,
		backgroundColor: '#d0ece7',

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
	cardStyle: {
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		alignItems: 'center'
	},
	inputStyle: {
    padding:10,
    margin:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,
    color: '#5d6d7e',
  },
  inputStyleBio: {
    padding:10,
    margin:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    height:180,
    borderRadius: 5,
    color: '#5d6d7e',
  },
  photoBox: {
  	backgroundColor:'white',
  	height:100,
  	width:250,
  	textAlign: 'center',
  	flex: 1,
  	borderRadius: 5,
  	// flexDirection: 'column',
  	alignItems: 'center',
  justifyContent: 'center'
  },
  cameraButton: {
  	backgroundColor:'white',
  	padding: 10
  },
  serviceButton:{
  	backgroundColor: 'orange',
  	color: '#ffffff',
  	padding: 10,
  	borderRadius: 5,
  	marginTop:15
  }
}

export default MapScreen;