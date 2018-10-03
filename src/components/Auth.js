import React, { Component } from 'react';
import { StyleSheet,
        Text,
        Button,
        TextInput,
        View,
        TouchableHighlight, 
        TouchableOpacity,
        StatusBar
	    } from 'react-native';
import {auth} from '../firebase';





class Auth extends Component{
  state = {
    email: "",
    password: ""
  }

  renderButton(){
  switch(this.props.loggedIn){
      case true:
        return(
          <TouchableOpacity onPress={()=>this._logOut()} style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>
                  Sign Out
                  </Text>
              </TouchableOpacity>
            )
      default:
        return(
        <TouchableOpacity onPress={()=>this.signInOrCreateUser()} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                Enter
                </Text>
        </TouchableOpacity>
      )
    }
  }

    render(){  
      const {email, password} = this.state;
      const {signInOrCreateUser} = this.props;
      console.log(this.props)
        return(
          <View style={styles.containerStyle}>
             <StatusBar hidden={true} />
            <View>
              <TextInput placeholder="email" 
                          style={styles.inputStyle} 
                          onChangeText = {(email)=>this.setState({email})}
                          value={email}
                          underlineColorAndroid='transparent'
                          
                          >
              </TextInput>
              <TextInput placeholder="password" 
                        style={styles.inputStyle}
                        onChangeText={(password) =>this.setState({password})} 
                        value={password}
                        secureTextEntry={true}
                        >
              </TextInput>
            </View>

            <View>
              {this.renderButton()}
            </View>

          </View>

     );   
  }


// Auth function to sign in with firebase

 signInOrCreateUser(){
  const {email, password} = this.state;
  

    auth.signInWithEmailAndPassword(email, password).then(()=>{
          this.props.navigate('Home')
           
           console.log('im hit')

    }).catch((e)=>{
        alert(e.message)
          auth.createUserWithEmailAndPassword(email, password).then(()=>{
                alert("USER CREATED")
                this.props.navigate('CreateProf')
                

          }).catch((e)=>{
            alert(e.code)
            alert(e.message)
          })
  
    })
  }
// end function

// LogOut function
_logOut(){
  navigator.geolocation.stopObserving();
  auth.signOut();
  this.props.navigate('StartScreen');

}
// end function

 

// onLoginSuccess(){
//   const {navigate} = this.props
//   // navigate to next screen
// }


}

const styles = {
  containerStyle:{ 
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    backgroundColor: '#77C9D4',
    borderRadius: 5,
    // borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
    marginTop:20
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  inputStyle: {
    padding:10,
    marginTop:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'#CCCCCC',
    shadowColor: '#CCC',
    shadowOffset: { width: 0, height: .5 },
    shadowOpacity: 0.8,
    shadowRadius: .5,
    // elevation: 1,

  }
};




export default Auth;


