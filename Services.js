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
import {createBottomTabNavigator} from 'react-navigation';
import { ActionSheet, Picker, Form, Container, Header, Content, Card, CardItem, Thumbnail, FooterTab, Footer, Button, Icon, Left, Body, Right } from 'native-base';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServices: "key0",
      selectedRadius: "key0"
    };
  }

  onServiceChange(value: string) {
    this.setState({
      selectedServices: value,
      
    })
  };

    onRadiusChange(value: string) {
    this.setState({
      selectedRadius: value
    })
  };
  
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Content>
          <Form style={{flexDirection: 'row', paddingTop:10}}>
            <Picker
              mode="dropdown"
              iosHeader="Select Service"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              itemStyle={{ backgroundColor: '#666', marginLeft: 0, paddingLeft: 15, }}
              itemTextStyle={{ fontSize: 18, color: 'white' }}
              selectedValue={this.state.selectedServices}
              onValueChange={this.onServiceChange.bind(this)}
            >
              <Picker.Item label="Select Service" value="key0"/>
              <Picker.Item label="Electrician" value="key1" />
              <Picker.Item label="Plumber" value="key2" />
              <Picker.Item label="Pest Control" value="key3" />
              <Picker.Item label="Dog Walker" value="key4" />
            </Picker>
            <Picker
              mode="dropdown"
              iosHeader="Select Radius"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selectedRadius}
              itemStyle={{ backgroundColor: '#666', marginLeft: 0, paddingLeft: 15}}
              itemTextStyle={{ fontSize: 18, color: 'white' }}
              onValueChange={this.onRadiusChange.bind(this)}
            >
              <Picker.Item label="Select Radius" value="key0" />
              <Picker.Item label="1 Mile" value="key1" />
              <Picker.Item label="3 Miles" value="key2" />
              <Picker.Item label="5 Miles" value="key3" />
              <Picker.Item label="10 Miles" value="key4" />
            </Picker>
          </Form>
          <CardItem><Image source={require('./map.png')} style={styles.mapImage}/></CardItem>
        </Content>
      </Container>
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
  mapBox:{
    height:500
  }, 
  mapImage:{
    width:340
  }

});
