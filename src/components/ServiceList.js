import React,{ Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {services} from '../reducers';
import {getServices} from '../actions/getServicesAction';
import MultiSelect from 'react-native-multiple-select';

import srvcs from '../data/services.json';

class ServiceList extends Component {
	state ={
		selectedItems: []
	}

	componentWillMount(){
		this.props.getServices(); 


	}

	onSelectedItemsChange = selectedItems => {
    	this.setState({ selectedItems });
  };

	render(){
		const data = this.props.services

		
	
		return(
			<View style={{flex: 1}}>
				<MultiSelect
					hideTags
					items={srvcs}
					uniqueKey="id"
					ref={(component) => { this.multiSelect = component }}
					onSelectedItemsChange={this.onSelectedItemsChange}
					selectedItems={this.state.selectedItems}
					selectText="Pick Items"
					searchInputPlaceholderText="Search Items..."
					onChangeInput={ (text)=> console.log(text)}
					altFontFamily="ProximaNova-Light"
					tagRemoveIconColor="#CCC"
					tagBorderColor="#CCC"
					tagTextColor="#CCC"
					selectedItemTextColor="#CCC"
					selectedItemIconColor="#CCC"
					itemTextColor="#000"
					displayKey="name"
					fontSize={20}
					itemFontSize={20}
					searchInputStyle={{ color: '#CCC' }}
					submitButtonColor="#CCC"
					submitButtonText="Submit"
					/>
			
      </View>
		)
	}

}

const mapStateToProps = ({services}) => ({services});


export default connect(mapStateToProps, {getServices})(ServiceList);