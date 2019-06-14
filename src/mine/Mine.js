import React, { Component } from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';

import Color from '../common/Color';
import MineItem from './mineView/MineItem';
import MineHeader from './mineView/MineHeader';

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:['header','我的订单','我的收藏','我的购物车','售后服务','设置'],
    };
  }

  static navigationOptions={
    headerTitle:'我的',
  }

  logoutCallback=(text)=>{
    this.props.navigation.push('Login');
  }
  renderItem({item,index}){
    if (index===0) {
      return (
        <MineHeader data={item} callback={(text)=>this.logoutCallback()}></MineHeader>
      )
    }
    return (
      <MineItem title={item}></MineItem>
    )
  }
  render() {
    return (
      <View style={styles.container}>
       
      <FlatList data={this.state.data}
      renderItem={this.renderItem.bind(this)}
      keyExtractor={({item,index})=>index}
      extraData={this.state.data}></FlatList>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:Color.COLOR_VIEW_BAC,
  },
  
})