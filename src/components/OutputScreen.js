import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native'

export default class OutputScreen extends Component {
  constructor(props) {
    super(props);
}
  render() {
      return (
          <View>
              <Text style = {{fontSize: 25, color: 'blue', marginTop: 30, textAlign: 'center'}}>{this.props.fullName != '' ? 'Your Details' : null}</Text>
              <Text style = {{fontSize: 25, color: 'black', marginTop: 30, textAlign: 'center'}}>{this.props.fullName}</Text>
          </View>
      )
  }
}