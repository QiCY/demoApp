import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import Spinkit from 'react-native-spinkit';

class Loading extends Component {
  render() {
    return (
      <Modal visible={this.props.showLoading} transparent={true}>
          <View style={{flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'rgba(0,0,0,0,1)'}}>
              <Spinkit isVisible={this.props.showLoading}
               type={'FadingCircleAlt'} 
               color={'#a3c410'}
                size={60}></Spinkit>
             
          </View>
      </Modal>
    )
  }
}

export default Loading
