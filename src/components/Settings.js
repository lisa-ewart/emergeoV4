import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  Image, 
  StatusBar,
  Header,
  TouchableOpacity,

} from 'react-native';
import {Icon,
        Content,
        List,
        ListItem,
        Container,
        Left,
        Right,
        Thumbnail,
 } from 'native-base';
 import AccordionExample from './Accordion';
 // import {logOut} from './Auth';
 import SignOutButton from './SignOutButton';

export default class Settings extends Component {


  render() {

    // console.log(logOut);
    return (  
         <Content>
        <View>
        <StatusBar hidden={true} />
          <View style={styles.profileBox}>
            <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOzYELSp-WXLev_yXSO05oonmSy6Qz73IY3nWgvBq4Geg_g-3'}} />
            </Left>
          </View>
         <AccordionExample />
        </View>
        <View>
          <SignOutButton />
        </View>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
  borderWidth: 1,
  backgroundColor: '#77C9D4',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    // color: '#5d6d7e'
  },
  cardStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center'
  },
  profileBox:{
    height: 80,
    backgroundColor: '#77C9D4',
    padding:10,
    flex:1,

  }

});
