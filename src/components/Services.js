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
import {connect} from 'react-redux';
import {fetchServiceList, addToServiceList} from '../actions/services_actions';
import {service_list} from '../reducers';

import { ActionSheet, Picker, Form, Container, Header, Content, Card, CardItem, Thumbnail, FooterTab, Footer, Button, Icon, Left, Body, Right } from 'native-base';




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServices: 'key0',
      selectedRadius: "key0",
      serviceList: []
    };
  }

  componentWillMount(){
    this.props.fetchServiceList();

    // this.props.addToServiceList('Dog Walker');


  }

  componentWillReceiveProps(newProps){

    const sl = Object.values(newProps.service_list);

    this.setState({serviceList: sl})

    
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

   renderServiceItems = () => {
     return this.state.serviceList.map(service =>
     
        <Picker.Item label={service.service_name} value={service.key} key={service.key} />
    
     )
   }
 
  
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <Container style={styles.containerStyle}>
        <Content>
          <Form style={{flexDirection: 'row', paddingTop:10}}>
            <Picker
              mode="dropdown"
              iosHeader="Select Service"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              itemStyle={{ backgroundColor: '#666', marginLeft: 0, paddingLeft: 15 }}
              itemTextStyle={{ fontSize: 15, color: 'white' }}
              selectedValue={this.state.selectedServices}
              onValueChange={(itemValue, itemPosition)=> this.setState({selectedServices: itemValue})}
            >
              <Picker.Item label="Select Service" value="key0"/>
              {this.renderServiceItems(this)}
            </Picker>
            <Picker
              mode="dropdown"
              iosHeader="Select Radius"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selectedRadius}
              itemStyle={{ backgroundColor: '#666', marginLeft: 0, paddingLeft: 15}}
              itemTextStyle={{ fontSize: 15, color: 'white' }}
              onValueChange={this.onRadiusChange.bind(this)}
            >
              <Picker.Item label="Select Radius" value="key0" />
              <Picker.Item label="1 Mile" value="key1" />
              <Picker.Item label="3 Miles" value="key2" />
              <Picker.Item label="5 Miles" value="key3" />
              <Picker.Item label="10 Miles" value="key4" />
            </Picker>
          </Form>
          <CardItem style={styles.mapBox}>


          </CardItem>
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
    height:400,
    borderRadius: 2,
    borderColor: '#ddd',
  }, 
  selectorText:{
    color:'#fff',
    fontSize:12,
  },
  mapImage:{
    width:340
  }

});

const mapStateToProps = ({service_list}) => ({service_list});

export default connect(mapStateToProps, {fetchServiceList, addToServiceList})(Search);