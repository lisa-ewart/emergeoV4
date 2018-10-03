//change likes to 5-star rating
//how many jobs completed
//jobs completed in firebase database



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
import { ActionSheet, Container, Header, Content, Card, CardItem, Thumbnail, FooterTab, Footer, Button, Icon, Left, Body, Right } from 'native-base';

import Search from './Services';
import Messages from './Messages';
import Settings from './Settings';

export class Home extends Component {

state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return ( 
      <Container style={styles.containerStyle}>
      <StatusBar hidden={true} />
        <Content>
          <Card style={styles.cardStyle}>
            <CardItem>
              <Left>
                  <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOzYELSp-WXLev_yXSO05oonmSy6Qz73IY3nWgvBq4Geg_g-3'}} />
                 <Body>
                  <Text style={styles.textStyle2}>UserNameHere</Text>
                  <Text note>Electrician, Plumber</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="star" style={styles.iconButtons}/>
                  <Text style={styles.iconText}>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent  onPress={() => {
            this.setModalVisible(true);
          }}>
                  <Icon active name="chatbubbles" style={styles.iconButtons}/>
                  <Text style={styles.iconButtons}>Reviews</Text>
                </Button>
              </Body>
              <Right>
                <Text style={styles.onlineText}>online!</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                  <Text style={styles.textStyle2}>Licensed: Yes</Text>
                  <Text style={styles.textStyle2}>Insured: Yes</Text>
                </Body>
            </CardItem>
      <CardItem>
        <Text style={styles.bioBox}>Welcome to Comprehensive Contractors; Your one-stop resource for full-service plumbing and electrical solutions in NJ and NY, serving areas in Bergen, Rockland, and Passaic Counties.</Text>
      </CardItem>
      <CardItem footer>
        <TouchableOpacity style={styles.messageButton} onPress={()=> uploadImage() }>
        <Text style={styles.textStyle}>Message Me</Text>
        </TouchableOpacity>
      </CardItem> 
          </Card>


      <View style={{marginTop: 22, marginRight:20}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modalBox}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
               
                <Text style={{color:'white', fontWeight: 'bold'}}>X</Text>
                
              </TouchableHighlight>
            </View>
            <View style={{marginLeft:20}}>
            <Thumbnail style={{marginBottom:20}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOzYELSp-WXLev_yXSO05oonmSy6Qz73IY3nWgvBq4Geg_g-3'}} />
            <Text style={{color:'white', fontWeight: 'bold', paddingTop:10}}>UserNameHere</Text>
            <ScrollView>
           
            <Text style={{color:'white', marginTop:20}}>-The guy was alright.  He was a bit weird, but knew what he was talking about and did a clean professional job.</Text>
            <Text style={{color:'white', marginTop:20}}>-Do NOT use UserNameHere!!!  I repeat:  Do NOT use UserNameHere!!! He charged me way more than what I paid last time for same work.  I think he might be a second cousin.  Looked strangely familiar.</Text>
            <Text style={{color:'white',marginTop:20}}>-UserNameHere was great.  He arrived on time and finished early.  Nice work.</Text>
            <Text style={{color:'white',marginTop:20}}>-He showed up within minutes and finished installing all or our light fixtures within 2 hours.  Will call him again.</Text>
 
            <Text style={{color:'white', marginTop:20}}>-The guy was alright.  He was a bit weird, but knew what he was talking about and did a clean professional job.</Text>
            <Text style={{color:'white', marginTop:20}}>-Do NOT use UserNameHere!!!  I repeat:  Do NOT use UserNameHere!!! He charged me way more than what I paid last time for same work.  I think he might be a second cousin.  Looked strangely familiar.</Text>
            <Text style={{color:'white',marginTop:20}}>-UserNameHere was great.  He arrived on time and finished early.  Nice work.</Text>
            <Text style={{color:'white',marginTop:20}}>-He showed up within minutes and finished installing all or our light fixtures within 2 hours.  Will call him again.</Text>
 
          </ScrollView>
          </View>
          </View>
        </Modal>
      </View>
        </Content>
      </Container>
    );
  }
}



export default createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={24}
                    style={styles.menuIcons}
                />
      ),    
    tabBarOptions: {
        activeTintColor: '#FFF', // active icon color
        inactiveTintColor: '#77C9D4',  // inactive icon color
        style: {
            backgroundColor: '#666' // TabBar background
        }
      }
    }, //end navigationOptions
  }, //end Home screen
  Search: {screen: Search,
    navigationOptions:{
      tabBarLabel:'Services',
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name="search"
                    color={tintColor}
                    size={24}
                    style={styles.menuIcons}
                />
      ),    
    tabBarOptions: {
        activeTintColor: '#FFF', // active icon color
        inactiveTintColor: '#77C9D4',  // inactive icon color
        style: {
            backgroundColor: '#666' // TabBar background
        }
      }
    }, //end navigationOptions
  }, //en
   Messages: {screen: Messages,
    navigationOptions:{
      tabBarLabel:'Messages',
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name="mail"
                    color={tintColor}
                    size={24}
                    style={styles.menuIcons}
                />
      ),    
    tabBarOptions: {
        activeTintColor: '#FFF', // active icon color
        inactiveTintColor: '#77C9D4',  // inactive icon color
        style: {
            backgroundColor: '#666' // TabBar background
        }
      }
    }, //end navigationOptions
  }, //en
  Settings: {screen: Settings,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name="settings"
                    color={tintColor}
                    size={24}
                    style={styles.menuIcons}
                />
      ),    
    tabBarOptions: {
        activeTintColor: '#FFF', // active icon color
        inactiveTintColor: '#77C9D4',  // inactive icon color
        style: {
            backgroundColor: '#666' // TabBar background
        }
      }
    }, //end navigationOptions
  }, //en
});

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
  modalBox:{
    marginLeft:10,
    marginRight:10,
    padding:25,
    width:350, 
    height:'auto', 
    backgroundColor: 'rgba(0,0,0,.4)', 
    flexDirection: 'column', 
    flex:1

  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  bioBox:{
    padding:5,
    color:'#666666'
  },
  onlineText:{
    fontSize:13,
    color: '#57BC90'
  },
  textStyle2:{
    // textAlign: 'center',
    fontSize: 16,
    color: '#5d6d7e',
    fontWeight: 'bold',
    padding:2
    // marginLeft: -120
  },
  cardStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
    height:500
  },

  iconButtons:{
    color: '#F76C6C',
  },
  iconText:{
    paddingLeft:10,
    color: '#F76C6C',
  },
  messageButton:{
    backgroundColor: '#57BC90',
    // color: '#ffffff',
    padding: 5,
    borderRadius: 4,
    marginTop:15
  },
  menuIcons:{
    color:'#57BC90',
  }
});
