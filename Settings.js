import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  Image, 
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TextInput, ScrollView
} from 'react-native';
import {Icon } from 'native-base';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          Settings
        </Text>
      </View>
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
  }

});
