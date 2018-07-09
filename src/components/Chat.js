import React from 'react';
import {
	View,
	 Text,
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import {getProfile} from '../actions/profile_actions';
import {user} from '../reducers';



class Chat extends React.Component {
	state = {
		messages: []
	};

	componentWillMount(){
	

		this.props.getProfile()
	}


	setUid() {
		this.props.screenProps.currentUser;
	}

	getUid() {
		return this.props.screenProps.currentUser;
	}



    // retrieve the messages from the Backend

	loadMessages(callback){
		const uid = this.props.screenProps.currentUser;
		this.messagesRef = firebase.database().ref('Users/'+ uid).child('messages');
		this.messagesRef.off();
		const onReceive = (data) => {
			const message = data.val();
			callback({
				_id: data.key,
				text:message.text,
				createdAt: new Date(message.createdAt),
				user: {
					id: message.user.id,
					name:message.user.name,
				},
			});
		};
		this.messagesRef.limitToLast(20).on('child_added', onReceive);
	}

	sendMessage(message) {
		for (let i = 0; i < message.length; i++) {
			this.messagesRef.push({
				text:message[i].text,
				user:message[i].user,
				createdAt: firebase.database.ServerValue.TIMESTAMP,
			});
		}
	}

	closeChat() {
		if (this.messagesRef) {
			this.messagesRef.off();
		}
	}

	render() {
		

        console.log(this.props);
		

		return (
			<GiftedChat 
				messages={this.state.messages}
				onSend={(message) => {
					//send message to your backend
					this.sendMessage(message);
				}}
				user={{
					_id: this.getUid(),
					name: this.props.name,
				}}
			/>

		);
	}

	componentDidMount() {
		this.loadMessages((message) => {
			this.setState((previousState) => {
				return {
					messages:GiftedChat.append(previousState.messages, message),
				};
			});
		});
	}

	componentWillUnmount() {
		this.closeChat();
	}
}

Chat.defaultProps = {
	name: 'John',
};

const mapStateToProps = ({user}) => ({user});



export default connect(mapStateToProps, {getProfile})(Chat);