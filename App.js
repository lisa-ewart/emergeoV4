//can't create a new user with a new email address and can't sign in with an existing account
//need to be able to change sign in button to sign out and add change navigation to create account/sign in button so that it go to create profile or profile page

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import {app, auth, database} from './src/firebase';
// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import configureStore from './src/components/configStore';
// location imports
import {accessPosition, watchPosition} from './src/actions/location_actions';
// import rootReducers from './src/reducers';
// screens and components
import StartScreen from './src/components/StartScreen.js';
import ChatScreen from './src/components/Chat.js';
import CreateProfile from './src/components/CreateProfile.js';
import ProfileHome from './src/components/ProfileHome.js';
import Home from './src/components/Profile.js';
import ServiceList from './src/components/ServiceList.js';
import Auth from './src/components/Auth.js';
import AccordionExample from './src/components/Accordion';
// import ImageSelector from './src/components/ImageSelector.js';



const AppStackNavigator = createStackNavigator({
  StartScreen: {screen: StartScreen},
    CreateProf: {screen: CreateProfile,
      navigationOptions: {
      title: "Create Your Profile",
      headerLeft: null,
    },

    },
    MyProfile: {screen: Home,
      navigationOptions: {
      title: "Home",
      headerLeft: null,
      header: null,
    },

    },
    Message: {screen: ChatScreen}
})



class App extends Component {




  state = { loggedIn: null, currentUser: null}
componentWillMount(){
  app;

  auth.onAuthStateChanged(user=>{
    if(user){
      this.setState({loggedIn: true, currentUser: user.uid});
      this._requestLocation();
    };
  });

  

}




_requestLocation = async () =>{
  try{
    let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      if(status === PermissionsAndroid.RESULTS.GRANTED){
        console.log('yoo')
      } else {
        console.log('ACESS DENIED')
      }
  } catch (err){
    console.warn(err)
  }
}

  render() {
    // const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = configureStore();
    const {loggedIn, currentUser} = this.state;
    console.log(this.props)
    

    return (

       
      <Provider store={store}>
        <View style={styles.container}>
         <StatusBar hidden={true} />
          <AppStackNavigator screenProps={{loggedIn, currentUser}}/>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;