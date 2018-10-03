///Need the following in the firebase database for messages:
//date/time of message;a boolean-valued field for read/unread messages, which should be
//pushed to the top of the stack, 


import React, { Component } from 'react';
import { Container, Header, Thumbnail, Content, List, ListItem, Text, Left, Right, Icon, View } from 'native-base';
export default class Messages extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text style={styles.messageBox, styles.activeItem}>Simon Mignolet</Text>
                <Text style={styles.messagePreview}>Message Preview</Text>
              </Left>
              <Right>
                <Icon name="calendar" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={styles.fontSize}>Nathaniel Clyne</Text>
                 <Text style={styles.messagePreview}>Message Preview2</Text>
              </Left>
              <Right>
                <Icon name="calendar" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fontSize}>Dejan Lovren</Text>
                 <Text style={styles.messagePreview}>Message Preview3</Text>
              </Left>
              <Right>
                <Icon name="calendar" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const styles = {
  messageBox:{
    flex:1,
    fontSize:15,
  },
  activeItem:{
    color:'green',
    fontSize:15,
  },
  fontSize:{
    fontSize:15,
  },
  messagePreview:{
    fontSize:15,
    color:'#666',
    paddingLeft:10,
  },
  profileBox:{
    height: 45,
    backgroundColor: '#77C9D4',
    padding:10,
    flex:1,

  }
}