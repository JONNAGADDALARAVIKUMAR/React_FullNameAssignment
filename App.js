import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import OutputScreen from './src/components/OutputScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      fullName: ''
    }
  }
  handleFirstName = (firstName) => {
    this.setState({
      firstName: firstName
    })
  }

  handleLastName = (lastName) => {
    this.setState({
      lastName: lastName
    })
  }
  onButton = () => {
    this.setState({
      fullName: `Full Name : ${this.state.firstName} ${this.state.lastName}`
    })
  }
  render() {
    return (
      <View style={{ backgroundColor: '#a0dba5', height: '100%', paddingTop: '5%' }}>
        <Text style={{ fontSize: 25, color: 'blue', marginTop: 10, textAlign: 'center' }}>Enter Details</Text>
        <TextInput placeholder={'Enter First Name'}
          borderWidth={1}
          marginTop={10}
          onChangeText={this.handleFirstName}
          value={this.state.firstName} />

        <TextInput placeholder={'Enter Last Name'}
          borderWidth={1}
          marginTop={10}
          marginBottom={30}
          onChangeText={this.handleLastName}
          value={this.state.lastName} />

        <Button title={'SUBMIT'}
          onPress={this.onButton} />

        <OutputScreen fullName={this.state.fullName}/>
      </View>
    );
  };
};
export default App;
