//top shows photo first, first name, last initial, services provided, 
//keep icons for likes and reviews
//ability to add contacts when viewing their profile/card
//remove second photo
//icon to edit all fields
//icon to add to favorites
//icon to share




import React, { Component } from 'react';
import { StyleSheet,
      TextInput,
	  View,
	  TouchableOpacity,
	  TouchableHighlight,
	  ScrollView, 
      StatusBar,
      Image,
      Modal,
	    } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, FooterTab, Footer, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class MyProfile extends Component {

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
        <Header />
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
            <CardItem cardBody>
             <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOzYELSp-WXLev_yXSO05oonmSy6Qz73IY3nWgvBq4Geg_g-3'}} style={{height: 200, width: null, flex: 1}}/>


            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" style={styles.iconButtons}/>
                  <Text style={styles.iconButtons}>12 Likes</Text>
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
          <View style={{margin: 20, width:370, height:'auto', backgroundColor: 'rgba(0,0,0,.4)', flexDirection: 'column', flex:1}}>
            <View style={styles.modalBox}>
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
      </Container>
    );
  }
}



const styles = {

	containerStyle:{
	borderWidth: 1,
	backgroundColor: '#d0ece7',
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		color: '#5d6d7e'
	},
	modalBox:{
		margin:40,
		
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
		color: 'orange'
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
		alignItems: 'center'
	},

	iconButtons:{
		color: '#F76C6C',
    
	},
	
  
  messageButton:{
  	backgroundColor: '#464866',
  	color: '#ffffff',
  	padding: 5,
  	borderRadius: 4,
  	marginTop:15
  }
}