import React, { Component } from 'react';
import { View, Text ,TextInput,TouchableHighlight} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput></TextInput>
          <TextInput></TextInput>
          <Text></Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

})

